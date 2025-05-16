import type { Metadata } from "next";

import { Inter } from "next/font/google"
import "./globals.css";
import { PageShell } from "@ui";
import { Navigation } from "./components/Navigation/Navigation";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ['latin']
})

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/gavekort", label: "Køb gavekort" },
  { href: "/klippekort", label: "Klippekort" },
];

export const metadata: Metadata = {
  title: "Hovedopgave 2025 customer-web",
  description: "Udforsk customer-web for hovedopgave 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className={`${inter.variable}`}>
        <PageShell headerContent={<Navigation links={navLinks}/>}>
        {children}
        </PageShell>
      </body>
    </html>
  );
}