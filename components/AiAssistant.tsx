"use client"

import { Bot, X } from "lucide-react"
import { useState } from "react"

export default function AiAssistant() {
  const [open, setOpen] = useState(false)

  return (
    <>
      
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-100 text-black flex items-center justify-center shadow-lg hover:scale-105 transition z-50"
      >
        <Bot />
      </button>

      
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-black border border-white/10 rounded-xl shadow-xl z-50 flex flex-col">

          <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
            <span className="text-sm">Kevin AI</span>
            <X
              size={16}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="flex-1 p-4 text-sm text-white/60">
            Ask me about Kevin&apos;s skills, projects or experience.
          </div>

        </div>
      )}
    </>
  )
}
