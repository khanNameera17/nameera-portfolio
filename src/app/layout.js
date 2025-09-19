import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nameera-Portfolio",
  description: "Created by nameera khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/images/Home.jpg" /> {/* <-- your icon path */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
