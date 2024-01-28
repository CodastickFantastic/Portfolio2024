import styles from "@/scss/pages/aboutMe.module.scss";

import dynamic from "next/dynamic";

const HeaderWithQuote = dynamic(() => import("@/components/macroComponents/HeaderWithQuote"));
const PersonSlider = dynamic(() => import("@/components/macroComponents/PersonSlider"));
const Technologies = dynamic(() => import("@/components/macroComponents/Technologies"));
const ProcessDescription = dynamic(() => import("@/components/macroComponents/ProcessDescription"));
const TimeLine = dynamic(() => import("@/components/macroComponents/TimeLine"));

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
