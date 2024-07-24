"use client"

import styles from "@/scss/components/LastRealization.module.scss";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import forward from "@/../public/img/icons/forward.png";
import { determineLanguage } from "@/helpers/translations";

const LastRealization = (
    {
        img,
        type,
        link,
        title
    }: {
        img: StaticImageData,
        type: string,
        link: string,
        title: string
    }): React.JSX.Element => {

    const language = determineLanguage()

    return (
        <div className={styles.lastRealization}>
            <Image src={img} alt="Wizualizacja ostatniej realizacji" />
            <div className={styles.type}>
                <p>{type}</p>
            </div>
            <Link href={link} className={styles.link}>{language === "pl" ? "Sprawdź szczegóły" : "Read more"}<Image src={forward} alt="Przenieś dalej" /></Link>
            <p className={styles.label}>{language === "pl" ? "Ostatnia Realizacja" : "My latest project..."}</p>
            <p className={styles.title}>{title}</p>
        </div >
    )
};

export default LastRealization;