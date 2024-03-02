import type { Metadata } from "next";
import { Josefin_Sans, Manjari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ModeProvider from "./provider";
import { useTheme } from "next-themes";
import Background from "./backgroud";

const josefineSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefinsans",
});

const manjari = Manjari({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-manjari",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefineSans.variable} ${manjari.variable} font-sans relative`}
      >
        <ModeProvider>
          <Background />
          <Header />
          <main className="max-w-4xl mx-auto p-4 min-h-screen">
            {children}
          </main>
        </ModeProvider>
      </body>
    </html>
  );
}
