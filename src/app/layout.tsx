import { Footer, Navbar } from "@/components";
import AppGlobal from "@/features/layout/AppGlobal";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const cairoSans = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Khasmoula",
  description: "Khasmoula is a platform for creating and sharing coupons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairoSans.variable} antialiased`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          <AppGlobal>{children}</AppGlobal>
        </main>
        <Footer />
      </body>
    </html>
  );
}
