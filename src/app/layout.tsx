import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yogimulyana.vercel.app"),
  title: {
    default: "Deasy Wahyuni",
    template: `%s | Deasy Wahyuni`,
  },
  description:
    "An online portfolio and blog by Deasy Wahyuni. Showcase of my projects, and some of my thoughts about website development.",
  authors: [
    { name: "Deasy Wahyuni", url: "https://www.deasywahyuni.vercel.app" },
  ],
  alternates: {
    canonical: "https://www.deasywahyuni.vercel.app",
  },
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="bg-white dark:bg-[#0e1111]">
              <Header />
              {/* <Navbar /> */}
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
