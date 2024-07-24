import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/pollin2.webp';

export const metadata: Metadata = {
    title: 'Aplikacja IoT',
    description: 'Aplikacja mobilna która umożliwia sterowanie urządzeniami IoT firmy Pollin',
    keywords: ["Aplikacja mobilna", "Aplikacja IoT", "Aplikacja mobilna IoT", "Aplikacja mobilna sterująca urządzeniami IoT",
        "Aplikacja React Native", "Aplikacja React Native IoT", "Aplikacja React Native sterująca urządzeniami IoT"
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/portfolio/pollin',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/pollin',
            'en': 'https://jakubwojtysiak.online/en/portfolio/pollin'
        }
    }
}

const PollinPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Aplikacja IoT"
                        info="Aplikacja mobilna która umożliwia sterowanie urządzeniami IoT firmy Pollin"
                        bullets={["Android", "Urzadzenia IoT", "Zdalne Sterowanie"]}
                        technologies="React Native"
                        time="2 tygodnie"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        noFollow={true}
                    />
                </div>
            </section>
            <section className={styles.step1}>
                <h2 className={styles.step1_title}>Pierwotna Makieta Figma</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQNvufPD752opwEpUrarTfl%2FPollin%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default PollinPage;