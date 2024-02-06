import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import "animate.css/animate.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integrity Realty",
  description: "Experience Unwavering Integrity and Exceptional Service with Integrity Realty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}
