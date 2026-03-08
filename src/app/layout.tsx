"use client";

import { MVTOrchestrator } from "@mvtlab/nextjs-orchestrator";
import { VWOScript } from 'vwo-smartcode-nextjs';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <VWOScript accountId="1121661" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MVTOrchestrator
          orchestratorKey="CLP3oYoNjc31e9a6lUU1Fw"
          antiFlickerEnabled
        >
          {children}
        </MVTOrchestrator>
      </body>
    </html>
  );
}
