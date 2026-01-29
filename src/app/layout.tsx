import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-app",
});

export const metadata: Metadata = {
  title: "Coastal Millwork & Supply | AWI QCP Premium Certified | Summerville, SC",
  description:
    "Award-winning, full-service commercial interior architectural woodwork and adjacent finishes contractor. Design, fabrication, and installation of custom wood, laminates, metals, glass, and stone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <Header />
        <main className="min-h-screen pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
