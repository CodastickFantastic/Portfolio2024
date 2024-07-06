import styles from '@/styles/pages/projectPage.module.css';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/franciszkanie.webp';

export const metadata: Metadata = {
    title: 'System Archiwalno Biblioteczny',
    description: 'System słóżący do digitalizacji oraz skłądowania plików. Bezstratna konwersja dużych plików w celu zaoszczędzenia miejsca na dysku.',
    keywords: ['System Archiwalno Biblioteczny', "Ar-Bi", "System dla biblioteki", "Digitalizacja ksiąg", "Digitalizacja zbiorów"],
    alternates: {
        canonical: 'http://jakubwojtysiak.pl/portfolio/system-archiwalno-biblioteczny',
        languages: {
            'pl-PL': 'http://jakubwojtysiak.pl/portfolio/system-archiwalno-biblioteczny',
        }
    }
}

const ArBiPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="System Archiwalno Biblioteczny"
                        info="System słóżący do digitalizacji oraz składowania średniowiecznych zbiorów"
                        bullets={["Digitalizacja ksiąg", "Dostep wymaga autoryzacji admina", "Bezstratna minimalizacja plików (nawet 99% kompresja powierzchni)"]}
                        technologies="NextJS + Prisma"
                        time="2 tygodnie"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://www.franciszkanie.ar-bi.pl"
                        noFollow={true}
                    />
                </div>
            </section>
            <section className={styles.step1}>
                <h2 className={styles.step1_title}>Prezentacja Aplikacji</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxuNxPb1TDMHgg8vifvyi90%2FAr-Bi-(Franciszkanie)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DR3n6upds0lfyGeka-1" allowFullScreen />
            </section>
        </main>
    )
}

export default ArBiPage;