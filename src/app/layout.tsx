'use client'

import './globals.css';
import 'primeicons/primeicons.css';

import { HeroUIProvider } from "@heroui/react";
import { Knewave } from 'next/font/google';

import NavBar from "@components/NavBar/navbar";
import Footer from "@components/Footer/footer";

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
        <HeroUIProvider>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  )
}