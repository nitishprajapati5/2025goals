import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ProgressProvider } from "./_contexts/ProgressContext";
import ProgressBar from "./_components/ProgressBar";
import { Analytics } from "@vercel/analytics/react"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Goals 2025",
  description: "Goals App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <ProgressProvider>
        <ProgressBar />
        {children}
        </ProgressProvider>
        <Analytics />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
