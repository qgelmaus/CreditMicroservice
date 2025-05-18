
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Hovedopgave 2025 admin-web",
	description: "Udforsk admin-web for hovedopgave 2025",
};


export default function RootLayout({
  modal,
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-100`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
