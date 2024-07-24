import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/p1.webp';

export const metadata: Metadata = {
    title: 'Landing Page',
    description: 'Landing page design and coding for an apartment rental company',
    keywords: ["Landing page", "Strona landing page", "Strona landing page dla firmy wynajmującej apartamenty",
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio/landingpage-p1',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/landingpage-p1',
            "en": 'https://jakubwojtysiak.online/en/portfolio/landingpage-p1'
        }
    }
}

const LogisticCRM = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="LandingPage"
                        info="Landing page design and coding for an apartment rental company"
                        bullets={["Projekt Figma", "Online Booking", "Booking"]}
                        technologies="Figma"
                        time="1 day"
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
                <h2 className={styles.step1_title}>Original Figma Mockup</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZQR16Q45a0Ochl5e6u9qSB%2FLandingPage-(PetraOne)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default LogisticCRM;