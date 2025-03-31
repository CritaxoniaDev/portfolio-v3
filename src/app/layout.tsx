import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gian Raphael Alcantara | Portfolio",
  description: "Personal portfolio website of Gian Raphael Alcantara",
  icons: {
    icon: [
      { url: '/icons/logo.svg' },
    ],
    apple: [
      { url: '/icons/logo.svg' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased tracking-tighter`}
      >
        {children}
      </body>
    </html>
  );
}
