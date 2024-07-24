"use client"

import styles from '@/scss/components/Technologies.module.scss';
import Image from 'next/image';

import aws from '@/../public/apps/aws.png';
import css from '@/../public/apps/css.png';
import doc from '@/../public/apps/doc.png';
import fig from '@/../public/apps/fig.png';
import gcp from '@/../public/apps/gcp.png';
import git from '@/../public/apps/git.png';
import html from '@/../public/apps/html.png';
import js from '@/../public/apps/js.png';
import lin from '@/../public/apps/lin.png';
import ms from '@/../public/apps/ms.png';
import next from '@/../public/apps/next.png';
import node from '@/../public/apps/node.png';
import obs from '@/../public/apps/obs.png';
import ps from '@/../public/apps/ps.png';
import react from '@/../public/apps/react.png';
import xd from '@/../public/apps/xd.png';
import { determineLanguage } from '@/helpers/translations';


const Technologies = (): React.JSX.Element => {
    const language = determineLanguage()

    return (
        <section id="technologies" className={styles.technologies}>
            <h2>{language === "pl" ? "Technologie" : "Technologies"}</h2>
            <p dangerouslySetInnerHTML={{ __html: language === "pl" ? "Dowiedz się z jakich <span class='purple'>narzędzi</span> korzystam" : "Find out what <span class='purple'>tools</span> I use" }} />
            <div className={styles.slider}>
                <div className={styles.sliderTrack}>
                    {/* First Round */}
                    <div className={styles.slide}>
                        <Image src={aws} alt="Serwery AWS" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={css} alt="Programowanie CSS" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={doc} alt="Konteneryzacja Docker" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={fig} alt="Projektowanie Figma" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={gcp} alt="Google Cloud Platform" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={git} alt="GitHub" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={html} alt="Programowanie HTML" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={js} alt="Programownie JavaScript" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={lin} alt="Administracja Linux" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={ms} alt="Microsoft Azure" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={next} alt="Programowanie w NextJs" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={node} alt="Programowanie w NodeJs" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={obs} alt="Notatki w Obsidian" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={ps} alt="Obróbka w Photoshop" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={react} alt="Programowanie w React" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={xd} alt="Projektowanie w Adobe XD" />
                    </div>

                    {/* Second Round */}
                    <div className={styles.slide}>
                        <Image src={aws} alt="Serwery AWS" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={css} alt="Programowanie CSS" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={doc} alt="Konteneryzacja Docker" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={fig} alt="Projektowanie Figma" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={gcp} alt="Google Cloud Platform" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={git} alt="GitHub" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={html} alt="Programowanie HTML" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={js} alt="Programownie JavaScript" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={lin} alt="Administracja Linux" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={ms} alt="Microsoft Azure" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={next} alt="Programowanie w NextJs" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={node} alt="Programowanie w NodeJs" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={obs} alt="Notatki w Obsidian" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={ps} alt="Obróbka w Photoshop" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={react} alt="Programowanie w React" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={xd} alt="Projektowanie w Adobe XD" />
                    </div>

                    {/* Third Round */}
                    <div className={styles.slide}>
                        <Image src={aws} alt="Serwery AWS" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={css} alt="Programowanie CSS" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={doc} alt="Konteneryzacja Docker" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={fig} alt="Projektowanie Figma" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={gcp} alt="Google Cloud Platform" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={git} alt="GitHub" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={html} alt="Programowanie HTML" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={js} alt="Programownie JavaScript" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={lin} alt="Administracja Linux" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={ms} alt="Microsoft Azure" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={next} alt="Programowanie w NextJs" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={node} alt="Programowanie w NodeJs" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={obs} alt="Notatki w Obsidian" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={ps} alt="Obróbka w Photoshop" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={react} alt="Programowanie w React" />
                    </div>
                    <div className={styles.slide}>
                        <Image src={xd} alt="Projektowanie w Adobe XD" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies