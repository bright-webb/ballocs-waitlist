import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfonts from "next/font/local";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const argentum = localfonts({
  src: [
    {
      path: "../../public/fonts/ArgentumSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArgentumSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArgentumSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArgentumSans-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-argentum",
})

export const metadata: Metadata = {
  title: "Ballocs Wait-list",
  description: "Book a spot on the wait-list for Ballocs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${argentum.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
