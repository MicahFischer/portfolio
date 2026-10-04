import { Cursor } from "@/components/cursor";
import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-VariableItalic.woff2",
      weight: "200 700",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const recia = localFont({
  src: [
    {
      path: "./fonts/Recia-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Recia-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Recia-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Recia-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-recia",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Micah Fischer — Product Designer",
  description:
    "Micah Fischer is an award-winning Senior Product Designer based in Nashville, Tennessee, specializing in product, user experience, web design, and brand development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${generalSans.variable} ${recia.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_back,arrow_forward,calculate,check,chevron_left,chevron_right,code,contact_phone,content_copy,expand_more,grid_view,hourglass,laptop_mac,lock,mail,menu_book,open_in_new,person,slab_serif,table,text_compare,warning&display=block"
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
