import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/skanowanie.webp';
import clientLogo from '@/../public/img/clients/skanowanie-logo-black.png';

export const metadata: Metadata = {
    title: 'Sklep Internetowy Skanowanie.pl',
    description: 'Realizacja polegała na kompletnej przebudowie istniejącego sklepu internetowego opartego na Wordpress do Shopify.',
    keywords: ["Sklep Internetowy", "Sklep Internetowy Wordpress", "Sklep Internetowy Shopify", "Sklep Internetowy Skanowanie.pl"],
    alternates: {
        canonical: 'https://jakubwojtysiak.pl/portfolio/skanowanie',
        languages: {
            'pl-PL': 'https://jakubwojtysiak.pl/portfolio/skanowanie',
        }
    }
}

const ArBiPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Sklep Internetowy Skanowanie.pl"
                        info="Przebudowa sklepu z Wordpress na Shopify wraz z podpięciem integracji magazynowych."
                        bullets={["Przebudowa Serwisu z Wordpress na Shopify", "Nowe Komponenty UI", "Optymalizacja Strony", "Integracja Wapro", "Integracja Baselinker", "Integracja Magazynowa", "Wielojezyczność"]}
                        technologies="Shopify Hydrogen"
                        time="3 tygodnie"
                        clientLogo={clientLogo}
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://www.skanowanie.pl"
                        noFollow={true}
                    />
                </div>
            </section>
            {/* <section className={styles.step1}>
                <h2 className={styles.step1_title}>Prezentacja Aplikacji</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxuNxPb1TDMHgg8vifvyi90%2FAr-Bi-(Franciszkanie)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DR3n6upds0lfyGeka-1" allowFullScreen />
            </section> */}
        </main>
    )
}

export default ArBiPage;