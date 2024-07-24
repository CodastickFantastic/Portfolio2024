import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/stalomat.webp';

export const metadata: Metadata = {
    title: 'Company Website',
    description: 'Wordpress company website for a construction company. Full responsiveness, fast loading and custom subpages.',
    keywords: ["Company website", "Wordpress", "Wordpress website",
        "Wordpress company website", "Wordpress website for a construction company", "Wordpress website for a construction company"
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio/stalomat',
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
                        title="Company Website"
                        info="Wordpress website for a construction company with highly customizable subpages"
                        bullets={["Wordpress", "Elementor", "Custom subpages"]}
                        technologies="Wordpress"
                        time="1 week"
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