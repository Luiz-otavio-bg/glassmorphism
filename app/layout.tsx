import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const lemonMilk = localFont({
  src: "./fonts/lemonmilk.otf",
  variable: "--font-lemon-milk",
});
const rubrica = localFont({
  src: "./fonts/rubrica.ttf",
  variable: "--font-rubrica",
})

export const metadata: Metadata = {
  title: "Glassmorphism - BG",
  description: "My conception to Glassmorphism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br" className={`${poppins.className} ${lemonMilk.variable} ${rubrica.variable}  `}>
      <body className="font-sans antialised bg-[#0a192f]"> 
        {children}
      </body>
    </html>
  );
}
