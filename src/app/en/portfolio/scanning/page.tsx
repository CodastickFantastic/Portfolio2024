import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/skanowanie.webp';
import clientLogo from '@/../public/img/clients/skanowanie-logo-black.png';

export const metadata: Metadata = {
    title: 'Skanowanie.pl Online Store',
    description: 'The implementation consisted of a complete reconstruction of an existing online store based on Wordpress to Shopify.',
    keywords: ["Online Store", "Wordpress Online Store", "Shopify Online Store", "Skanowanie.pl Online Store"],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio/scanning',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/skanowanie',
            "en": 'https://jakubwojtysiak.online/en/portfolio/scanning'
        }
    }
}

const ArBiPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Skanowanie.pl Online Store"
                        info="Reconstruction of the store from Wordpress to Shopify along with connection of warehouse integrations."
                        bullets={["Website Reconstruction from Wordpress to Shopify", "New UI Components", "Website Optimization", "Wapro Integration", "Baselinker Integration", "Warehouse Integration", "Multi-language"]}
                        technologies="Shopify Hydrogen"
                        time="3 weeks"
                        clientLogo={clientLogo}
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://skanerdobiura.pl/"
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