import { Oswald } from "next/font/google";
import "./globals.css";
import Fotter from "./comp/Fotter";
import Nav from "./comp/Nav";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // كل الأوزان المتاحة
});

export const metadata = {
  title: "Fit Boost",
  description: "we can help you to grow your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Preload لصورة الخلفية الكبيرة */}
        <link rel="preload" href="/bg.webp" as="image" />

        {/* لو محتاج stylesheet خارجي مثال */}
        {/*
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        */}
      </head>
      <body className={`${oswald.variable} antialiased`}>
        <Nav />
        {children}
        <Fotter />
      </body>
    </html>
  );
}
