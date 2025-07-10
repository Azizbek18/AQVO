import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LoadingPage from "@/components/loading/loading";
import TranslationProvider from "@/components/translationProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taqvo",
  description: "Taqvo - Siz izlagan tam va sifat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TranslationProvider>
          <LoadingPage>
              <Header/>
              {children}
              <Footer/>           
          </LoadingPage>
        </TranslationProvider>
      </body>
    </html>
  );
}
