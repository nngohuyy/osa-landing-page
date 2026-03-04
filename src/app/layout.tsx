import './globals.css';
import 'primeicons/primeicons.css';

import { Metadata } from "next";
import { Knewave } from 'next/font/google';

import NavBar from "@components/NavBar/navbar";
import Footer from "@components/Footer/footer";
import Providers from './providers';

export const metadata: Metadata = {
  title: "OISP Student Ambassadors",
  description: "OSA's page with contact information.",
  openGraph: {
    title: "OISP Student Ambassadors",
    description: "OSA's page with contact information.",
    url: "https://your-domain.com",
    siteName: "OSA",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const knewave = Knewave({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-knewave',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={knewave.variable}>
      <body>
        <Providers>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}