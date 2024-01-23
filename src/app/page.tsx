import styles from "@/scss/pages/home.module.scss";

import HeaderWithBulletPoints from "@/components/macroComponents/HeaderWithBulletPoints";
import Image from "next/image";

import hero from "@/../public/img/hero_01_2024.png";
import ServiceSection from "@/components/macroComponents/ServiceSection";
import ContactSection from "@/components/macroComponents/ContactSection";

export default function Home() {
  return (
    <main>
      <div className={`${styles.heroSection} container`}>
        <div className={styles.left}>
          <HeaderWithBulletPoints />
        </div>
        <div className={styles.right}>
          <Image src={hero} alt="Mężczyzna trzymający się za okulary" />
        </div>
      </div>
      <div id="usługi" className={`${styles.serviceSection} container`}>
        <ServiceSection />
      </div>
      <div id="kontakt" className={`${styles.contactSection} container`}>
        <ContactSection />
      </div>
    </main>
  )
}
