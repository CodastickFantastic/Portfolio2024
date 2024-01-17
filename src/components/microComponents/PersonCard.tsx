import styles from '@/scss/components/PersonCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import openArrow from "@/../public/img/icons/openArrow.png"

const PersonCard = (
    { color, imageBg, imageBgAlt, imageFg, imageFgAlt, icon, label, showMore }:
        { color: string, imageBg: StaticImageData, imageBgAlt: string, imageFg: StaticImageData, imageFgAlt: string, icon: StaticImageData, label: string, showMore?: string }
): React.JSX.Element => {
    return <div className={styles.personCard}>
        <div className={styles.flexWrapperOne} style={{ borderColor: color }}>
            <Image
                alt={imageBgAlt}
                className={styles.bgImg}
                src={imageBg}
            />
            <Image
                alt={imageFgAlt}
                className={styles.person}
                src={imageFg}
            />
            <div className={styles.glyph} style={{ backgroundColor: color }}>
                <Image
                    alt="Ikona"
                    className={styles.icon}
                    src={icon}
                />
            </div>
        </div>
        <div className={styles.showMoreBtn} style={{ backgroundColor: color }}>
            <p className={styles.showMoreBtnText}>
                Poznaj szczegóły
            </p>
            <Image
                alt="Strzałka w prawo"
                className={styles.backIcon}
                src={openArrow}
            />
        </div>
        <div className={styles.label} style={{ backgroundColor: color }}>
            <p className={styles.labelText}>{label}</p>
        </div>
    </div>;
}


export default PersonCard