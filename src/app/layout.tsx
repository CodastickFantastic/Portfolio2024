import "@/scss/global.scss"

import NavigationBar from '@/components/globalComponents/NavigationBar'
import type { Metadata } from 'next'
import { Nunito, Poppins } from 'next/font/google'
import Footer from "@/components/globalComponents/Footer"
import Transition from "@/app/template"

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
  robots: 'index, follow',
  creator: 'Jakub Wojtysiak',
  publisher: 'Jakub Wojtysiak',
  formatDetection: {
    telephone: true,
    email: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Usługi IT - Jakub Wojtysiak",
    "alternateName": "Partner IT - Jakub Wojtysiak",
    "url": "https://jakubwojtysiak.online",
    "logo": "https://jakubwojtysiak.online/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48501721417",
      "contactType": "customer service",
      "areaServed": "PL",
      "availableLanguage": ["en", "Polish"]
    },
    "sameAs": [
      "https://www.facebook.com/JakubMagikWojtysiak",
      "https://www.linkedin.com/in/jakub-wojtysiak-6a16912b0",
      "https://github.com/CodastickFantastic"
    ]
  }
  return (
    <html lang="pl" className={`${nunito.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
        <header className="container">
          <NavigationBar />
        </header>
        <Transition>
          {children}
        </Transition>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
