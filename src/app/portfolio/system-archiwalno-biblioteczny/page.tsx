import styles from '@/scss/pages/projectPage.module.scss';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';

import heroImg from '@/../public/img/portfolio/test.png';


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
                        time="1 miesiąc"
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
                <h2 className={styles.step1_title}>Pierwotna Makieta Figma</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxuNxPb1TDMHgg8vifvyi90%2FAr-Bi-(Franciszkanie)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DR3n6upds0lfyGeka-1" allowFullScreen />
            </section>
        </main>
    )
}

export default ArBiPage;