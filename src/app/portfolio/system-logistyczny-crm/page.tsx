import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/megatrans.webp';

export const metadata: Metadata = {
    title: 'System Logistyczny (CRM)',
    description: 'System logistyczny z elementami CRM dla firmy z sektora TSL. System pozwala na zarządzanie zleceniami, kierowcami, pojazdami, oraz klientami.',
    keywords: ["System Logistyczny", "System CRM", "System dla firmy TSL",
        "System dla firmy transportowej", "System dla firmy spedycyjnej", "System dla firmy logistycznej"
    ],
    alternates: {
        canonical: 'http://jakubwojtysiak.pl/portfolio/system-logistyczny-crm',
        languages: {
            'pl-PL': 'http://jakubwojtysiak.pl/portfolio/system-logistyczny-crm',
        }
    }
}

const LogisticCRM = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="System Logistyczny (CRM)"
                        info="System logistyczny dla firmy z sektora TLS z elementami CRM. System pozwala na zarządzanie zleceniami, kierowcami, pojazdami, oraz klientami."
                        bullets={["Zarządzanie Przesyłkami", "Generowanie Zamówień", "Śledzenie Przesyłek", "Aplikacja Mobilna"]}
                        technologies="NextJs"
                        time="4 tygodnie"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        link="https://www.megatrans.online"
                        noFollow={true}
                    />
                </div>
            </section>
            <section className={styles.step1}>
                <h2 className={styles.step1_title}>Pierwotna Makieta Figma</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fmood4Khhjw10d7W1zoXldY%2FMegatrans%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default LogisticCRM;