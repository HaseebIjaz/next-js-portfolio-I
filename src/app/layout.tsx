"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"dark:bg-stone-900"}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
