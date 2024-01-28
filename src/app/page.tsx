import Image from "next/image";
import hero from "@/../public/img/hero_01_2024.webp";
import styles from "@/scss/pages/home.module.scss";
import dynamic from "next/dynamic";

const HeaderWithBulletPoints = dynamic(() => import("@/components/macroComponents/HeaderWithBulletPoints"));
const ServiceSection = dynamic(() => import("@/components/macroComponents/ServiceSection"));
const ContactSection = dynamic(() => import("@/components/macroComponents/ContactSection"));


export default function Home() {
  return (
    <main>
      <div className={`${styles.heroSection} container`}>
        <div className={styles.left}>
          <HeaderWithBulletPoints />
        </div>
        <div className={styles.right}>
          <Image src={hero} alt="Mężczyzna trzymający się za okulary" priority />
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
