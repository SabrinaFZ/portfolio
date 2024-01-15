import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Home | Portfolio",
  },
  description: "Sabrina Fernandez Zambrano portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body className={`${inter.className} bg-slate-800 text-white pb-12`}>
        {children}
      </body>
    </html>
  );
}
