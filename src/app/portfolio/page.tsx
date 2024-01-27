import LastRealization from "@/components/macroComponents/LastRealization"
import PortfolioHeader from "@/components/macroComponents/PortfolioHeader"
import styles from "@/scss/pages/PortfolioPage.module.scss"

import test from "@/../public/img/portfolio/test.png"
import RealizationTile from "@/components/microComponents/RealizationTile"


const PortfolioPage = (): React.JSX.Element => {
    return (
        <main className={`${styles.portfolioPage} container`}>
            <section className={styles.headerSection}>
                <div className={styles.left}>
                    <PortfolioHeader />
                </div>
                <div className={styles.right}>
                    <LastRealization
                        img={test}
                        type="NextJS"
                        link="/portfolio/system-archiwalno-biblioteczny"
                        title="System Ar-Bi"
                    />
                </div>
            </section>
            <section className={styles.projectsSection}>
                <div className={styles.tile}>
                    <RealizationTile
                        img={test}
                        type="NextJS"
                        link="https://www.franciszkanie.ar-bi.pl"
                        title="System Ar-Bi"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={test}
                        type="NextJS"
                        link="https://www.franciszkanie.ar-bi.pl"
                        title="System Ar-Bi"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={test}
                        type="NextJS"
                        link="https://www.franciszkanie.ar-bi.pl"
                        title="System Ar-Bi"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={test}
                        type="NextJS"
                        link="https://www.franciszkanie.ar-bi.pl"
                        title="System Ar-Bi"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={test}
                        type="NextJS"
                        link="https://www.franciszkanie.ar-bi.pl"
                        title="System Ar-Bi"
                    />
                </div>
                <div className={styles.tile}>
                    <RealizationTile
                        img={test}
                        type="NextJS"
                        link="https://www.franciszkanie.ar-bi.pl"
                        title="System Ar-Bi"
                    />
                </div>
            </section>
        </main >
    )
}

export default PortfolioPage