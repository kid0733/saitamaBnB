import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const nunito = Nunito({ 
  weight: ["400", "700"], 
  subsets: ["latin"] 

});

export const metadata: Metadata = {
  title: "Saitama BnB",
  description: "A BnB reservation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" />
      <body className={nunito.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
