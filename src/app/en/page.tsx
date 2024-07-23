import Image from "next/image";
import type { Metadata } from 'next'
import hero from "@/../public/img/hero_01_2024.webp";
import styles from "@/scss/pages/home.module.scss";

import HeaderWithBulletPoints from "@/components/macroComponents/HeaderWithBulletPoints";
import ServiceSection from "@/components/macroComponents/ServiceSection";
import ContactSection from "@/components/macroComponents/ContactSection";


export const metadata: Metadata = {
    title: 'Websites, e-commerce, mobile applications - Jakub Wojtysiak, IT Services',
    description: 'I create websites, online stores, mobile applications. I also deal with website positioning. Choose a reliable IT partner and start making money online today!',

    keywords: ['websites', 'online stores', 'mobile applications',
        'website positioning', 'website creation', 'online store creation',
        'mobile application development', 'website positioning', 'website positioning',
        'positioning of online stores', 'positioning of mobile applications', 'positioning of mobile applications'
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en',
        languages: {
            'pl-PL': 'https://jakubwojtysiak.online',
            'en-US': 'https://jakubwojtysiak.online/en',
            "en-GB": 'https://jakubwojtysiak.online/en',
        }
    }
}

export default function Home() {
    return (
        <main>
            <div className={`${styles.heroSection} container`}>
                <div className={styles.left}>
                    <HeaderWithBulletPoints
                        h1='<span class="purple">Websites</span> & digital marketing'
                        underTitle='Let me help you to <span class="purple">become</span> online...'
                        bullets={["Wordpress", "Websites", "IT Systems", "Mobile Applications", "Server Administration", "UI Visualization", "Hosting"]}
                        cta1={{ text: "Let's stay in touch", url: "#contact" }}
                        cta2={{ text: "Portfolio", url: "/en/portfolio" }}
                        protectBadge="Guarantee of <span class='purple'>satisfaction</span> and the highest <span class='purple'>quality</span>"
                    />
                </div>
                <div className={styles.right}>
                    <Image src={hero} alt="A man holding his glasses" priority />
                </div>
            </div>
            <div id="services" className={`${styles.serviceSection} container`}>
                <ServiceSection />
            </div>
            <div id="contact" className={`${styles.contactSection} container`}>
                <ContactSection />
            </div>
        </main >
    )
}
