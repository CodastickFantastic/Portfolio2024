import styles from "@/scss/pages/PortfolioPage.module.scss"

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
import naklejeczkaImg from "@/../public/img/portfolio/naklejeczka.webp"
import jazbaImg from "@/../public/img/portfolio/jazba.webp"
import skanowanieStrukturalneImg from "@/../public/img/portfolio/skanowanie-strukturalne.webp"
import skanowanieImg from "@/../public/img/portfolio/skanowanie.webp"
import p1Img from "@/../public/img/portfolio/p1.webp"

export const metadata: Metadata = {
    title: 'Portfolio - Jakub Wojtysiak, IT Services',
    description: 'Check out my portfolio. See what projects I managed to complete. Choose a reliable IT partner and start making money online today!',
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio',
            'en': 'https://jakubwojtysiak.online/en/portfolio'
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
                        img={skanowanieImg}
                        type="Shopify - Hydrogen"
                        link="/en/portfolio/scanning"
                        title="Online Store (Under construction...)"
                    />
                </div>
            </section>
            <section className={styles.projectsSection}>
                <div className={styles.tile}>
                    <RealizationTile
                        img={skanowanieStrukturalneImg}
                        type="NextJS"
                        link="https://skanowaniestrukturalne.pl"
                        title="Modern Landing Page"
                        noFollow
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={jazbaImg}
                        type="Shopify - Hydrogen"
                        link="/portfolio/jazba"
                        title="Online Store + Integrations"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={naklejeczkaImg}
                        type="Wordpress"
                        link="https://naklejeczka.pl"
                        title="LandingPage"
                        noFollow
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={franciszkanieImg}
                        type="NextJS"
                        link="/portfolio/system-archiwalno-biblioteczny"
                        title="Ar-Bi System"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={czystykamienImg}
                        type="NextJS"
                        link="/portfolio/czysty-kamien"
                        title="Company Website"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={stalomatImg}
                        type="Wordpress"
                        link="/portfolio/stalomat"
                        title="Company Website"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={megatransImg}
                        type="NextJS"
                        link="/portfolio/system-logistyczny-crm"
                        title="Logistics System (CRM)"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={kredyteoImg}
                        type="NextJS"
                        link="/portfolio/kredyteo"
                        title="Company Website"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={pollinImage}
                        type="ReactNative"
                        link="/portfolio/pollin"
                        title="IoT Application"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={p1Img}
                        type="NextJS"
                        link="/portfolio/landingpage-p1"
                        title="LandingPage"
                    />
                </div>
            </section>
        </main >
    )
}

export default PortfolioPage