import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "./_context/themeProvider";
import CustomCursor from '@/app/_components/ui/CustomCursor'

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      
      <ThemeProvider>
        <body className="dark:bg-black transition-colors duration-300">
          <CustomCursor/>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
