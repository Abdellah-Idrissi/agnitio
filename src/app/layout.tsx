import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/headerComps/Header";
import Footer from "@/components/Footer";
import favicon from "../../public/favicon.ico"
import ContextWrapper from "@/context";


export const metadata: Metadata = {
  title: "Agnitio",
  description: "Agnitio assignment - built by Abdellah M.El Idrissi",
  icons: [{ rel: 'icon', url: favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <main className="flex flex-col min-h-screen">
          <ContextWrapper>
            <Header />
            {children}
            <Footer />
          </ContextWrapper>
        </main>
      </body>
    </html>
  );
}
