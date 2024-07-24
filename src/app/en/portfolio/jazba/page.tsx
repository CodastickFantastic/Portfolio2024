import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/jazba.webp';

export const metadata: Metadata = {
    title: 'Online Store - Jazba',
    description: 'Online store based on Shopify, with high customization and integration with Baselinker',
    keywords: ["Online Store", "Shopify Online Store", "Baselinker Integration", "Jazba Online Store"],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio/jazba',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/jazba',
            "en": 'https://jakubwojtysiak.online/en/portfolio/jazba'
        }
    }
}

const ArBiPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Jazba Online Store"
                        info="A system for operating an online store based on Shopify with high customization of subpages."
                        bullets={["Online Store", "Baselinker Integration", "Fiscal Printer Service", "Warehouse Integration"]}
                        technologies="Shopify Hydrogen + Baselinker"
                        time="2 weeks"
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