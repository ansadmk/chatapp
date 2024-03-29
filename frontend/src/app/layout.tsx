import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import StoreProvider from "@/Redux/Provider";
import { unstable_noStore as noStore } from 'next/cache'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore()
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <StoreProvider>
        {children}
        </StoreProvider>
        </body>
    </html>
  );
}
