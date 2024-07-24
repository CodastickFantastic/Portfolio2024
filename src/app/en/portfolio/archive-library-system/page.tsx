import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/franciszkanie.webp';
import clientLogo from '@/../public/img/clients/skanowanie-logo-black.png';

export const metadata: Metadata = {
    title: 'Archive and Library System',
    description: 'A system for digitizing and storing files. Lossless conversion of large files to save disk space.',
    keywords: ['Archive and Library System', "Ar-Bi", "System for the library", "Digitization of books", "Digitization of collections"],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio/archive-library-system',
        languages: {
            'pl': 'https//jakubwojtysiak.online/portfolio/system-archiwalno-biblioteczny',
            "en": 'https//jakubwojtysiak.online/en/portfolio/archive-library-system',
        }
    }
}

const ArBiPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Archive and Library System"
                        info="A system for digitizing and storing medieval collections"
                        bullets={["Digitization of books", "Access requires admin authorization", "Lossless file minimization (up to 99% surface compression)"]}
                        technologies="NextJS + Prisma"
                        time="2 weeks"
                        clientLogo={clientLogo}
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
                <h2 className={styles.step1_title}>Original Figma Mockup</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxuNxPb1TDMHgg8vifvyi90%2FAr-Bi-(Franciszkanie)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DR3n6upds0lfyGeka-1" allowFullScreen />
            </section>
        </main>
    )
}

export default ArBiPage;