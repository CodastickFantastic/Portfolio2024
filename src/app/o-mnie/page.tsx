import styles from "@/scss/pages/aboutMe.module.scss";

import HeaderWithQuote from "@/components/macroComponents/HeaderWithQuote";
import PersonSlider from "@/components/macroComponents/PersonSlider";
import Technologies from "@/components/macroComponents/Technologies";
import ProcessDescription from "@/components/macroComponents/ProcessDescription";
import TimeLine from "@/components/macroComponents/TimeLine";

export default function Home() {
  return (
    <main>
      <section className={`${styles.heroSection} container`}>
        <div className={styles.left}>
          <HeaderWithQuote />
        </div>
        <div className={styles.right}>
          <PersonSlider />
        </div>
      </section>
      <div className={styles.section}>
        <Technologies />
      </div>
      <div className={styles.section}>
        <ProcessDescription />
      </div>
      <div className={styles.section}>
        <TimeLine />
      </div>
    </main>
  )
}
