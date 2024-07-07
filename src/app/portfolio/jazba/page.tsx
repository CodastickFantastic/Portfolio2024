import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/jazba.webp';

export const metadata: Metadata = {
    title: 'Sklep Interentowy - Jazba',
    description: 'Sklep internetowy oparty o Shopify, z wysoką customizacją, oraz integracją z Baselinkerem',
    keywords: ["Sklep Interentowy", "Sklep Internetowy Shopify", "Integracja Baselinker", "Sklep Internetowy Jazba"],
    alternates: {
        canonical: 'http://jakubwojtysiak.pl/portfolio/jazba',
        languages: {
            'pl-PL': 'http://jakubwojtysiak.pl/portfolio/jazba',
        }
    }
}

const ArBiPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Sklep Internetowy Jazba"
                        info="System do osbługi sklepu internetowego opraty o Shopify z wysoką customizacją podstron."
                        bullets={["Sklep Internetowy", "Integracja Baselinker", "Obsługa Drukarek Fiskalnych", "Integracja Magazynowa"]}
                        technologies="Shopify Hydrogen + Baselinker"
                        time="2 tygodnie"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://www.jazba.pl"
                        noFollow={true}
                    />
                </div>
            </section>
            {/* <section className={styles.step1}>
                <h2 className={styles.step1_title}>Prezentacja Aplikacji</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FzHl2oPQGzfnYWcaEfHcEyX%2FJazba%3Fnode-id%3D155-49%26t%3D2ODePg7agjztzDFi-1" allowFullScreen />
            </section> */}
        </main>
    )
}

export default ArBiPage;