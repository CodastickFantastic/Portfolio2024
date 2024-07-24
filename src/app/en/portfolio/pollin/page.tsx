import styles from '@/scss/pages/projectPage.module.scss';

import type { Metadata } from 'next';

import ProjectHeader from "@/components/macroComponents/ProjectHeader";
import RealizationTile from '@/components/microComponents/RealizationTile';


import heroImg from '@/../public/img/portfolio/pollin2.webp';

export const metadata: Metadata = {
    title: 'IoT Application',
    description: "Mobile application that allows you to control Pollin's IoT devices",
    keywords: ["Mobile application", "IoT application", "IoT mobile application", "Mobile application controlling IoT devices",
        "React Native App", "React Native IoT App", "React Native App Controlling IoT Devices"
    ],
    alternates: {
        canonical: 'https://jakubwojtysiak.online/portfolio/pollin',
        languages: {
            'pl': 'https://jakubwojtysiak.online/portfolio/pollin',
            'en': 'https://jakubwojtysiak.online/en/portfolio/pollin'
        }
    }
}

const PollinPage = (): React.JSX.Element => {

    return (
        <main className={`${styles.projectPage} container`}>
            <section className={styles.header}>
                <div className={styles.left}>
                    <ProjectHeader
                        title="IoT Application"
                        info="Mobile application that allows you to control Pollin IoT devices"
                        bullets={["Android", "IoT Devices", "Remote Control"]}
                        technologies="ReactNative"
                        time="2 week"
                    />
                </div>
                <div className={styles.right}>
                    <RealizationTile
                        img={heroImg}
                        noFollow={true}
                    />
                </div>
            </section>
            <section className={styles.step1}>
                <h2 className={styles.step1_title}>Original Figma Mockup</h2>
                <iframe className={styles.figmaWindow} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQNvufPD752opwEpUrarTfl%2FPollin%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DcArrsGRBj4NuHJqL-1" allowFullScreen />
            </section>
        </main>
    )
}

export default PollinPage;