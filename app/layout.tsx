import { Cursor } from "@/components/cursor";
import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

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
      className={`${dmMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
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
