import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "../styles/globals.css";


import { ReactNode } from "react";
import Header from "@/components/shared/header";
 // Usando una ruta relativa

// Usando una ruta relativa





const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plastic Market",
  description: "Genera Vida Sana",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
        
        <main>{children}</main></body>
    </html>
  );
}
