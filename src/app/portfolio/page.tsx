import styles from "@/styles/pages/PortfolioPage.module.css"

import type { Metadata } from 'next'

import LastRealization from "@/components/macroComponents/LastRealization"
import PortfolioHeader from "@/components/macroComponents/PortfolioHeader"
import RealizationTile from "@/components/microComponents/RealizationTile"

import franciszkanieImg from "@/../public/img/portfolio/franciszkanie.webp"
import stalomatImg from "@/../public/img/portfolio/stalomat.webp"
import kredyteoImg from "@/../public/img/portfolio/kredyteo.webp"
import pollinImage from "@/../public/img/portfolio/pollin.webp"
import megatransImg from "@/../public/img/portfolio/megatrans.webp"
import czystykamienImg from "@/../public/img/portfolio/czystykamien.webp"
import p1Img from "@/../public/img/portfolio/p1.webp"

export const metadata: Metadata = {
    title: 'Portfolio - Jakub Wojtysiak, Uługi IT',
    description: 'Sprawdź moje portfolio. Zobacz jakie projekty udało mi się zrealizować. Postaw na pewnego partnera IT i zacznij zarabiać w internecie już dziś!',
    keywords: ['strony internetowe', 'sklepy internetowe', 'aplikacje mobilne',
        'pozycjonowanie stron', 'tworzenie stron', 'tworzenie sklepów internetowych',
        'tworzenie aplikacji mobilnych', 'pozycjonowanie stron internetowych', 'pozycjonowanie stron www',
        'pozycjonowanie sklepów internetowych', 'pozycjonowanie aplikacji mobilnych', 'pozycjonowanie aplikacji mobilnych'
    ],
    alternates: {
        canonical: 'http://jakubwojtysiak.pl/portfolio',
        languages: {
            'pl-PL': 'http://jakubwojtysiak.pl/portfolio',
        }
    }
}

const PortfolioPage = (): React.JSX.Element => {
    return (
        <main className={`${styles.portfolioPage} container`}>
            <section className={styles.headerSection}>
                <div className={styles.left}>
                    <PortfolioHeader />
                </div>
                <div className={styles.right}>
                    <LastRealization
                        img={franciszkanieImg}
                        type="NextJS"
                        link="/portfolio/system-archiwalno-biblioteczny"
                        title="System Ar-Bi"
                    />
                </div>
            </section>
            <section className={styles.projectsSection}>
                <div className={styles.tile}>
                    <RealizationTile
                        img={czystykamienImg}
                        type="NextJS"
                        link="/portfolio/czysty-kamien"
                        title="Strona Firmowa"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={stalomatImg}
                        type="Wordpress"
                        link="/portfolio/stalomat"
                        title="Strona Firmowa"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={megatransImg}
                        type="NextJS"
                        link="/portfolio/system-logistyczny-crm"
                        title="System Logistyczny (CRM)"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={kredyteoImg}
                        type="NextJS"
                        link="/portfolio/kredyteo"
                        title="Strona Firmowa"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={pollinImage}
                        type="React Native"
                        link="/portfolio/pollin"
                        title="Aplikacja IoT"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={p1Img}
                        type="NextJS"
                        link="/portfolio/landingpage-p1"
                        title="Landing Page"
                    />
                </div>
            </section>
        </main >
    )
}

export default PortfolioPage