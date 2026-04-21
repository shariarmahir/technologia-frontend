import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CursorEffect } from "@/components/cursor-effect";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "technoLOgia — If it's not now, then when?",
  description:
    "Academic services, IoT & IEEE projects, and a school STEM program — built in Bangladesh, delivered worldwide.",
  metadataBase: new URL("https://technologia.example"),
  openGraph: {
    title: "technoLOgia — Academic services & STEM education",
    description:
      "From assignments and IEEE publications to school science programs — technoLOgia builds the next generation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
