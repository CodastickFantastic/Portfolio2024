import styles from "@/scss/pages/aboutMe.module.scss";

import dynamic from "next/dynamic";
import type { Metadata } from 'next'

const HeaderWithQuote = dynamic(() => import("@/components/macroComponents/HeaderWithQuote"));
const PersonSlider = dynamic(() => import("@/components/macroComponents/PersonSlider"));
const Technologies = dynamic(() => import("@/components/macroComponents/Technologies"));
const ProcessDescription = dynamic(() => import("@/components/macroComponents/ProcessDescription"));
const TimeLine = dynamic(() => import("@/components/macroComponents/TimeLine"));

export const metadata: Metadata = {
  title: 'O mnie - Jakub Wojtysiak, Uługi IT',
  description: 'Tworzę strony internetowe, sklepy internetowe, aplikacje mobilne. Zajmuję się również pozycjonowaniem stron internetowych. Postaw na pewnego partnera IT i zacznij zarabiać w internecie już dziś!',
  keywords: ['strony internetowe', 'sklepy internetowe', 'aplikacje mobilne',
    'pozycjonowanie stron', 'tworzenie stron', 'tworzenie sklepów internetowych',
    'tworzenie aplikacji mobilnych', 'pozycjonowanie stron internetowych', 'pozycjonowanie stron www',
    'pozycjonowanie sklepów internetowych', 'pozycjonowanie aplikacji mobilnych', 'pozycjonowanie aplikacji mobilnych'
  ],
  alternates: {
    canonical: 'http://jakubwojtysiak.pl/o-mnie',
    languages: {
      'pl-PL': 'http://jakubwojtysiak.pl/o-mnie',
    }
  }
}

export default function Home() {
  return (
    <main>
      <section className={`${styles.heroSection} container`}>
        <div className={styles.left}>
          <HeaderWithQuote />
        </div>
        <div className={styles.right}>
          <PersonSlider />
        </div>
      </section>
      <div className={styles.section}>
        <Technologies />
      </div>
      <div className={styles.section}>
        <ProcessDescription />
      </div>
      <div className={styles.section}>
        <TimeLine />
      </div>
    </main>
  )
}
