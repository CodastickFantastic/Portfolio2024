import styles from "@/scss/components/RealizationTile.module.scss";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import forward from "@/../public/img/icons/forward.png";

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

    return (
        <div className={styles.lastRealization}>
            <Image src={img} alt="Wizualizacja strony internetowej" />
            {type && <div className={styles.type}>{type}</div>}

            {link && (noFollow ?
                <>
                    <Link href={link} rel="nofollow" target="_blank" className={styles.link}>Pokaż stronę <Image src={forward} alt="Przenieś dalej" /></Link>
                    {title && <p className={styles.title}>{title}</p>}
                </>
                :
                <>
                    <Link href={link} className={styles.link}>Szczegóły <Image src={forward} alt="Przenieś dalej" /></Link>{title && <p className={styles.title}>{title}</p>}
                </>)
            }

        </div >
    )
};

export default RealizationTile;