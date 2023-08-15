
import Navbar from "@/app/Shared/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Container } from "postcss";
import MiddleSection from "@/components/MiddleSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Docs Hub",
  description: "Next Docs Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <MiddleSection></MiddleSection>
        <Footer></Footer>
      </body>
    </html>
  );
}
