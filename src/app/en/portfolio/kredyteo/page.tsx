import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/kredyteo.webp';

export const metadata: Metadata = {
    title: 'Company Website',
    description: 'Company website for a financial intermediary. Full responsiveness, Google and Facebook ads + video.',
    keywords: ["Company website", "NextJs", "Website for an intermediary",
        "Website for a loan intermediary", "Website for an insurance intermediary"
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/portfolio/kredyteo',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/kredyteo',
            'en': 'https://jakubwojtysiak.online/en/portfolio/kredyteo'
        }
    }
}

const KredyteoPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Company Website"
                        info="Website for a financial intermediary with an advertising campaign on Facebook and Google"
                        bullets={["Responsiveness", "Elegant Design", "Advertising Video", "Advertising Campaign"]}
                        technologies="NextJs"
                        time="2 days"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://www.kredyteo.info"
                        noFollow={true}
                    />
                </div>
            </section>
            <section className={styles.step1}>
                <h2 className={styles.step1_title}>Original Figma Mockup</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fddd0Z4TIjm7tYd1Bigc7Q9%2FKredyteo%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default KredyteoPage;