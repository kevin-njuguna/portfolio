import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { PT_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AiAssistant from "@/components/AiAssistant";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); */

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-kevin-njuguna.vercel.app/"),

  title: {
    default: "Kevin Njuguna | Full Stack Engineer",
    template: "%s | Kevin Njuguna",
  },

  description:
    "Full Stack Engineer based in Nairobi specializing in scalable backend systems, modern frontend architecture, and cloud infrastructure.",

  keywords: [
    "Kevin Njuguna",
    "Full Stack Engineer",
    "Backend Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Nairobi Software Engineer",
  ],

  authors: [{ name: "Kevin Njuguna" }],
  creator: "Kevin Njuguna",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kevin Njuguna | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in scalable backend systems and modern frontend architecture.",
    url: "https://portfolio-kevin-njuguna.vercel.app/",
    siteName: "Kevin Njuguna",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kevin Njuguna | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in backend systems and scalable architecture.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://portfolio-kevin-njuguna.vercel.app//#person",
    name: "Kevin Njuguna",
    url: "https://portfolio-kevin-njuguna.vercel.app/",
    //image: "https://portfolio-kevin-njuguna.vercel.app/",
    jobTitle: "Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in scalable backend systems and modern frontend architecture.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "Kenya",
    },
    sameAs: [
      "https://github.com/kevin-njuguna",
      "https://www.linkedin.com/in/kevin-njuguna-815098267",
    ],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Backend Architecture",
      "Cloud Infrastructure",
      "Scalable Systems",
    ],
  };

  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${geistMono.variable} antialiased`}>
        <div className="max-w-5xl mx-auto p-6 ">
          {children}
          <AiAssistant />
        </div>
        {/* Entity SEO Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}
