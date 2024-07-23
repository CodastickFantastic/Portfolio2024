import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/kredyteo.webp';

export const metadata: Metadata = {
    title: 'Strona Firmowa ',
    description: 'Strona firmowa dla pośrednika finansowego. Pełna responsywność, reklamy google oraz facebook + video.',
    keywords: ["Stroan firmowa", "NextJs", "Strona dla pośrednika",
        "Strona dla pośrednika kredytowego", "Strona dla pośrednika ubezpieczeńiowego"
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.pl/portfolio/kredyteo',
        languages: {
            'pl-PL': 'https://jakubwojtysiak.pl/portfolio/kredyteo',
        }
    }
}

const KredyteoPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Strona Firmowa"
                        info="Strona internetowea dla pośrednika finansowego z kampanią reklamową na facebooku i google"
                        bullets={["Responsywność", "Elegancki Design", "Filmik Reklamowy", "Kampania Reklamowa"]}
                        technologies="NextJs"
                        time="1 tydzień"
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
                <h2 className={styles.step1_title}>Pierwotna Makieta Figma</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fddd0Z4TIjm7tYd1Bigc7Q9%2FKredyteo%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default KredyteoPage;