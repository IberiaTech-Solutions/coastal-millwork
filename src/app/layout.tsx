import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
