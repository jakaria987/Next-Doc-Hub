import "./globals.css";
import { Inter } from "next/font/google";
import { Container } from "postcss";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import AuthProvider from "@/components/Provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProgNexus",
  description: "ProgNexus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </body>
      </AuthProvider>
    </html>
  );
}
