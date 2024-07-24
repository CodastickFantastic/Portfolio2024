import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/megatrans.webp';

export const metadata: Metadata = {
    title: 'Logistics System (CRM)',
    description: 'Logistics system with CRM elements for a company from the TSL sector. The system allows you to manage orders, drivers, vehicles and customers.',
    keywords: ["Logistics System", "CRM System", "System for TSL company",
        "System for a transport company", "System for a forwarding company", "System for a logistics company"
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/portfolio/logistics-system-crm',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/system-logistyczny-crm',
            'en': 'https://jakubwojtysiak.online/en/portfolio/logistics-system-crm',
        }
    }
}

const LogisticCRM = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="Logistics System (CRM)"
                        info="Logistics system for a company from the TLS sector with CRM elements. The system allows you to manage orders, drivers, vehicles and customers."
                        bullets={["Shipment Management", "Order Generation", "Shipment Tracking", "Mobile Application"]}
                        technologies="NextJs"
                        time="4 weeks"
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
                <h2 className={styles.step1_title}>Original Figma Mockup</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fmood4Khhjw10d7W1zoXldY%2FMegatrans%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default LogisticCRM;