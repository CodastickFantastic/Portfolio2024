import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/stalomat.webp';

export const metadata: Metadata = {
    title: 'Strona Firmowa',
    description: 'Strona firmowa Wordpress dla firmy konstrukcyjnej. Pełna responsywność, szybkie ładowanie oraz cusotmowe podstrony.',
    keywords: ["Stroan firmowa", "Wordpress", "Strona Wordpress",
        "Strona firmowa Wordpress", "Strona Wordpres dla firmy budowlanej", "Strona Wordpress dla firmy konstrukcyjnej"
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/portfolio/stalomat',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/stalomat',
            'en': 'https://jakubwojtysiak.online/en/portfolio/stalomat'
        }
    }
}

const StalomatPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header} style={{ height: "calc(100dvh - 200px)", paddingTop: 0 }}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Strona Firmowa"
                        info="Strona internetowa Wordpress dla firmy z branży konstrukcyjnej z dużą customizacją podstron"
                        bullets={["Wordpress", "Elementor", "Customowe podstrony"]}
                        technologies="Wordpress"
                        time="1 tydzień"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://www.stalomat.pl"
                        noFollow={true}
                    />
                </div>
            </section>
        </main>
    )
}

export default StalomatPage;