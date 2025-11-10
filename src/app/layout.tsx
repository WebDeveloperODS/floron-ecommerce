import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";

export const metadata: Metadata = {
  title: "Floron - Glow, Grow, Naturally",
  description: "Floron is your go-to destination for natural skincare products that enhance your beauty and well-being. Discover our curated selection of organic and eco-friendly items designed to nourish your skin and promote a healthy lifestyle.",
  keywords: "natural skincare, organic beauty products, eco-friendly skincare, healthy skin, skincare routine, natural ingredients, cruelty-free beauty, sustainable skincare, holistic skincare, skin nourishment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen items-center justify-start`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
