import "./globals.css";
import { Inter } from "next/font/google";

import { Container } from "postcss";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

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
        <Footer></Footer>
      </body>
    </html>
  );
}
