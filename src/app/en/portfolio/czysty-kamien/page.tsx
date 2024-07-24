import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/czystykamien.webp';

export const metadata: Metadata = {
    title: 'Company Website',
    description: 'Company website for a company in the paving stone cleaning industry. PWA application that can be installed on a mobile device. Full responsiveness, fast loading and custom subpages.',
    keywords: ["Company website", "PWA company website", "NextJS company website", "Company website with the possibility of installation on a mobile device", "Wordpress company website", "Company website for a paving stone cleaning company"],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio/czysty-kamien',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/czysty-kamien',
            'en': 'https://jakubwojtysiak.online/en/portfolio/czysty-kamien'
        }
    }
}

const LogisticCRM = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Company Website"
                        info="System for a company dealing with washing paving stones. PWA application with the possibility of installation on a mobile device. Full responsiveness, fast loading and custom subpages."
                        bullets={["Elegant Design", "Logo Creation", "PWA Application", "Blog", "Google Business Card"]}
                        technologies="NextJs"
                        time="1.5 weeks"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://www.czystykamien.pl"
                        noFollow={true}
                    />
                </div>
            </section>
            <section className={styles.step1}>
                <h2 className={styles.step1_title}>Original Figma Mockup</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9d2sopQuaT22RwXkCOHLR2%2FCzysty-Kamie%25C5%2584%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default LogisticCRM;