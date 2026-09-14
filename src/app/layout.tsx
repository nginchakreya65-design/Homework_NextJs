import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Navbar1 } from "@/components/ui/navbar1";
import { Footer2 } from "@/components/ui/footer2";

import Example from "@/components/errorhandlenodata";
import EcommerceProductCard from "@/components/productcard/productCard";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Block-Commerce",
  description: "Block Commerce is th platform which manage product with many providing saling item and clothes",
  keywords:'Product,Closth, women closth , men clothes',
  openGraph:{
    title:{
      template: '%s | Block-Commerce',
      default: ' Block-Commerce'

    },
    description: 'Block Commerce is th platform which manage product with many providing saling item and clothes',
    images:['thumnail.png']
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ErrorBoundary errorComponent={Example}>
          <Navbar1 />
          {children}
          <Footer2 />
        </ErrorBoundary>
      </body>
    </html>
  );
}
