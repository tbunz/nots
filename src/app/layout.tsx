import type { Metadata } from "next";

import "./globals.css";

import Header from './Header'

export const metadata: Metadata = {

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Header/>
          {children}
        
      </body>
    </html>
  );
}
