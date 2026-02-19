import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import AiAssistant from "@/components/AiAssistant";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Njuguna",
  description: "Kevin Njuguna portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${geistMono.variable} antialiased`}>
        <div className="max-w-5xl mx-auto p-6 ">
          {children}
          <AiAssistant />
        </div>
      </body>
    </html>
  );
}
