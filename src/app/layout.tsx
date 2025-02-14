import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs WhatByte Assignment",
  description: "An assignment project from WhatByte team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full antialiased`}>{children}</body>
    </html>
  );
}
