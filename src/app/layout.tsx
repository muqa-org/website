import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/app/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "MUQA",
  description: "Ethereum For The Common Good",
};

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
