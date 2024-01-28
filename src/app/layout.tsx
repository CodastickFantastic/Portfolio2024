import "@/scss/global.scss"

import NavigationBar from '@/components/globalComponents/NavigationBar'
import type { Metadata } from 'next'
import { Nunito, Poppins } from 'next/font/google'
import Footer from "@/components/globalComponents/Footer"

const nunito = Nunito({
  subsets: ['latin'],
  variable: "--font-nunito",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'Strony internetowe, sklepy internetowe, aplikacje mobilne - Jakub Wojtysiak, Uługi IT',
  description: 'Tworzę strony internetowe, sklepy internetowe, aplikacje mobilne. Zajmuję się również pozycjonowaniem stron internetowych. Postaw na pewnego partnera IT i zacznij zarabiać w internecie już dziś!',
  robots: 'index, follow',
  keywords: ['strony internetowe', 'sklepy internetowe', 'aplikacje mobilne',
    'pozycjonowanie stron', 'tworzenie stron', 'tworzenie sklepów internetowych',
    'tworzenie aplikacji mobilnych', 'pozycjonowanie stron internetowych', 'pozycjonowanie stron www',
    'pozycjonowanie sklepów internetowych', 'pozycjonowanie aplikacji mobilnych', 'pozycjonowanie aplikacji mobilnych'
  ],
  creator: 'Jakub Wojtysiak',
  publisher: 'Jakub Wojtysiak',
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: 'http://jakubwojtysiak.pl',
    languages: {
      'pl-PL': 'http://jakubwojtysiak.pl',
    }
  }
  




}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${nunito.variable} ${poppins.variable}`}>
      <body>
        <header className="container">
          <NavigationBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
