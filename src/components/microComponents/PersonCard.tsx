import styles from '@/scss/components/PersonCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import openArrow from "@/../public/img/icons/openArrow.png"

const PersonCard = (
    { color, imageBg, imageBgAlt, imageFg, imageFgAlt, icon, label, showMoreNo, description }:
        { color: string, imageBg: StaticImageData, imageBgAlt: string, imageFg: StaticImageData, imageFgAlt: string, icon: StaticImageData, label: string, showMoreNo?: number, description: string }
): React.JSX.Element => {
    return (
        <div className={styles.personCard}>
            <div className={styles.front}>
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
                <label htmlFor={`showMore${showMoreNo}`} className={styles.showMoreBtn} style={{ backgroundColor: color }}>
                    <input type="checkbox" id={`showMore${showMoreNo}`} className={styles.showMoreBtnInput} />
                    <p className={styles.showMoreBtnText}>
                        Poznaj szczegóły
                    </p>
                    <Image
                        alt="Strzałka w prawo"
                        className={styles.backIcon}
                        src={openArrow}
                    />
                </label>
                <div className={styles.label} style={{ backgroundColor: color }}>
                    <p className={styles.labelText}>{label}</p>
                </div>
            </div>
            <div className={styles.back}>
                <div className={styles.flexWrapperOne} style={{ borderColor: color }}>
                    <div className={styles.description}>
                        <p>{description}</p>
                    </div>
                    <div className={styles.glyph} style={{ backgroundColor: color }}>
                        <Image
                            alt="Ikona"
                            className={styles.icon}
                            src={icon}
                        />
                    </div>
                </div>
                <label htmlFor={`showMore${showMoreNo}`} className={styles.showMoreBtn} style={{ backgroundColor: color }}>
                    <input type="checkbox" id={`showMore${showMoreNo}`} className={styles.showMoreBtnInput} />
                    <Image
                        alt="Strzałka w prawo"
                        className={styles.backIcon}
                        src={openArrow}
                    />
                    <p className={styles.showMoreBtnText}>
                        Pokaż mniej
                    </p>
                </label>
                <div className={styles.label} style={{ backgroundColor: color }}>
                    <p className={styles.labelText}>{label}</p>
                </div>
            </div>
        </div>
    );
}


export default PersonCard