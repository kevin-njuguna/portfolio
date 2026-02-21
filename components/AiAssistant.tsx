"use client";
import { useRef, useEffect } from "react";

import { Bot, X, Send } from "lucide-react";
import { useState } from "react";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: error ?? "Something went wrong." },
      ]);
      setLoading(false);
      return;
    }

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    const aiMessage = { role: "ai" as const, text: "" };
    setMessages((prev) => [...prev, aiMessage]);

    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;

      const chunk = decoder.decode(value);

      aiMessage.text += chunk;

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...aiMessage };
        return updated;
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition z-50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
      >
        <Bot />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-125 bg-black/70 backdrop-blur-xl border border-white/10  rounded-xl shadow-xl z-50 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
            <span className="text-sm">Kevin AI</span>
            <X
              size={16}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md max-w-[80%]
                ${
                  msg.role === "user"
                    ? "bg-white text-black ml-auto"
                    : "bg-white/10 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-white/40 text-xs">Kevin AI is typing...</div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-white/10 p-3 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Kevin..."
              className="flex-1 bg-transparent outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
