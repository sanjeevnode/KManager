import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KManager",
  description: "Manage your secrets with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContext>
          <ToasterContext />
          <Navbar />
          <div className="flex flex-col items-center h-screen pt-16 px-4">
            <main className="w-full max-w-7xl flex-1">{children}</main>
            <Footer />
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
