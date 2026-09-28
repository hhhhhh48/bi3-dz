import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "bi3.dz | إدارة المبيعات", description: "نظام إدارة المبيعات للشركات الجزائرية" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body className={`${cairo.variable} ${inter.variable}`}>{children}</body></html>; }
