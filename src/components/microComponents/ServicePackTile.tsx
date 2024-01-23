import styles from '@/scss/components/ServicePackTile.module.scss';

import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import plus from '@/../public/img/icons/plus.png';


const ServicePackTile = ({
    imageSrc,
    title,
    title2,
    description,
    description2,
    color
}: {
    imageSrc: StaticImageData[],
    title: string,
    title2: string,
    description: string[],
    description2: string[],
    color: string,
}): React.JSX.Element => {

    return (
        <div className={styles.servicePackTile} style={{ borderColor: color }}>
            <div className={styles.tileHeader}>
                <p className={styles.title}>{title}</p>
                <p className={styles.title2}>{title2}</p>
            </div>
            <div className={styles.hr} style={{ background: color }} />
            <div className={styles.services}>
                <div className={styles.service}>
                    <Image src={imageSrc[0]} alt="Ikona usługi" />
                    <p className={styles.description}>
                        {description[0]}
                    </p>
                    <p className={styles.description2}>
                        {description2[0]}
                    </p>
                </div>
                <Image src={plus} alt="Ikona plusa" />
                <div className={styles.service}>
                    <Image src={imageSrc[1]} alt="Ikona usługi" />
                    <p className={styles.description}>
                        {description[1]}
                    </p>
                    <p className={styles.description2}>
                        {description2[1]}
                    </p>
                </div>
                <Image src={plus} alt="Ikona plusa" />
                <div className={styles.service}>
                    <Image src={imageSrc[2]} alt="Ikona usługi" />
                    <p className={styles.description}>
                        {description[2]}
                    </p>
                    <p className={styles.description2}>
                        {description2[2]}
                    </p>
                </div>
                <Image src={plus} alt="Ikona plusa" />
                <div className={styles.service}>
                    <Image src={imageSrc[3]} alt="Ikona usługi" />
                    <p className={styles.description}>
                        {description[3]}
                    </p>
                    <p className={styles.description2}>
                        {description2[3]}
                    </p>
                </div>
                <Image src={plus} alt="Ikona plusa" />
                <div className={styles.service}>
                    <Image src={imageSrc[4]} alt="Ikona usługi" />
                    <p className={styles.description}>
                        {description[4]}
                    </p>
                    <p className={styles.description2}>
                        {description2[4]}
                    </p>
                </div>

            </div>
        </div>
    )
};

export default ServicePackTile;