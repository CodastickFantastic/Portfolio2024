import Image from "next/image";
import type { Metadata } from 'next'
import hero from "@/../public/img/hero_01_2024.webp";
import styles from "@/scss/pages/home.module.scss";

import HeaderWithBulletPoints from "@/components/macroComponents/HeaderWithBulletPoints";
import ServiceSection from "@/components/macroComponents/ServiceSection";
import ContactSection from "@/components/macroComponents/ContactSection";



export const metadata: Metadata = {
  title: 'Strony internetowe, sklepy internetowe, aplikacje mobilne - Jakub Wojtysiak, Uługi IT',
  description: 'Tworzę strony internetowe, sklepy internetowe, aplikacje mobilne. Zajmuję się również pozycjonowaniem stron internetowych. Postaw na pewnego partnera IT i zacznij zarabiać w internecie już dziś!',

  keywords: ['strony internetowe', 'sklepy internetowe', 'aplikacje mobilne',
    'pozycjonowanie stron', 'tworzenie stron', 'tworzenie sklepów internetowych',
    'tworzenie aplikacji mobilnych', 'pozycjonowanie stron internetowych', 'pozycjonowanie stron www',
    'pozycjonowanie sklepów internetowych', 'pozycjonowanie aplikacji mobilnych', 'pozycjonowanie aplikacji mobilnych'
  ],
  alternates: {
    canonical: 'https://jakubwojtysiak.online',
    languages: {
      'pl': 'https://jakubwojtysiak.online',
      'en': 'https://jakubwojtysiak.online/en'
    }
  }
}

export default function Home() {
  return (
    <main>
      <div className={`${styles.heroSection} container`}>
        <div className={styles.left}>
          <HeaderWithBulletPoints
            h1='Strony <span class="purple">internetowe</span> i marketing'
            underTitle='Pozwól sobie pomóc i <span class="purple">zaistniej</span> ze mną w sieci'
            bullets={["Wordpress", "Strony Internetowe", "Systemy Infromatyczne", "Aplikacje Mobilne", "Administracja Serwerów", "Wizualizacja UI", "Hosting"]}
            cta1={{ text: "Nawiążmy Kontakt", url: "#kontakt" }}
            cta2={{ text: "Portfolio", url: "/portfolio" }}
            protectBadge="Gwarancja <span class='purple'>satysfakcji</span> oraz najwyższej <span class='purple'>jakości</span>"
          />
        </div>
        <div className={styles.right}>
          <Image src={hero} alt="Mężczyzna trzymający się za okulary" priority />
        </div>
      </div>
      <div id="uslugi" className={`${styles.serviceSection} container`}>
        <ServiceSection />
      </div>
      <div id="kontakt" className={`${styles.contactSection} container`}>
        <ContactSection />
      </div>
    </main >
  )
}
