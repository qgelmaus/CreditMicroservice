"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageShell } from "@ui";
import { Navigation } from "../components/Navigation/Navigation";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/create", label: "Opret" },
  { href: "/account", label: "Administrér" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className={`${inter.variable}`}>
        <ApolloProvider client={client}>
          <PageShell headerContent={<Navigation links={navLinks} />}>
            {children}
          </PageShell>
        </ApolloProvider>
      </body>
    </html>
  );
}
