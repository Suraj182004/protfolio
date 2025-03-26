import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suraj Yaligar | Portfolio",
  description: "Full Stack Developer & Computer Engineering Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <main className="min-h-screen bg-background overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
