import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Raveloarisoa Sandrinah Portfolio",
  description:
    "I am a front-end developer from Madagascar with 3 years of experience contributing remotely to building web applications for companies in Europe and the US.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="bg-slate-200 font-Roboto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
