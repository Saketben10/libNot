import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../config/slate";
 

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.desceription,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 
    <html lang="en">
      <body>{children}</body>
    </html>
  
  );
}
