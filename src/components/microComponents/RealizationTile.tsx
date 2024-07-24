"use client"

import styles from "@/scss/components/RealizationTile.module.scss";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import forward from "@/../public/img/icons/forward.png";
import { determineLanguage } from "@/helpers/translations";
import CustomLinkComponent from "./CustomLinkComponent";

const RealizationTile = (
    {
        img,
        type,
        link = null,
        title,
        noFollow = false
    }: {
        img: StaticImageData,
        type?: string,
        link?: string | null,
        title?: string,
        noFollow?: boolean

    }): React.JSX.Element => {
    const language = determineLanguage()

    return (
        <div className={styles.lastRealization}>
            <Image src={img} alt="Wizualizacja strony internetowej" />
            {type && <div className={styles.type}>{type}</div>}

            {link && (noFollow ?
                <>
                    <Link href={link} rel="nofollow" target="_blank" className={styles.link}>{language === "pl" ? "Pokaż stronę" : "Go to page"} <Image src={forward} alt="Przenieś dalej" /></Link>
                </>
                :
                <>
                    <CustomLinkComponent
                        href={link}
                        className={styles.link}
                        plText="Szczegóły"
                        enText="Details"
                    >
                        {language === "pl" ? "Szczegóły" : "Details"} <Image src={forward} alt="Przenieś dalej" />
                    </CustomLinkComponent>
                </>)
            }
            {title && <p className={styles.title}>{title}</p>}
        </div >
    )
};

export default RealizationTile;