import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/czystykamien.webp';

export const metadata: Metadata = {
    title: 'Strona Firmowa',
    description: 'Strona firmowa dla firmy z branży czyszczenia kostki brukowej. Aplikacja PWA z możliwością instalacji na urządzeniu mobilnym. Pełna responsywność, szybkie ładowanie oraz cusotmowe podstrony.',
    keywords: ["Strona firmowa", "Strona firmowa PWA", "Strona firmowa NextJS", "Strona firmowa z możliwością instalacji na urządzeniu mobilnym", "Strona firmowa wordpress", "Strona firmowa dla firmy czyszczącej kostkę brukową"],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/portfolio/czysty-kamien',
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
                        title="Strona Firmowa"
                        info="System dla firmy zajmującej się myciem kostki brukowej. Aplikacja PWA z możliwością instalacji na urządzeniu mobilnym. Pełna responsywność, szybkie ładowanie oraz cusotmowe podstrony."
                        bullets={["Elegancki Design", "Tworzenie Logo", "Aplikacja PWA", "Blog", "Wizytówka Google"]}
                        technologies="NextJs"
                        time="1.5 tygodnia"
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
                <h2 className={styles.step1_title}>Pierwotna Makieta Figma</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9d2sopQuaT22RwXkCOHLR2%2FCzysty-Kamie%25C5%2584%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default LogisticCRM;