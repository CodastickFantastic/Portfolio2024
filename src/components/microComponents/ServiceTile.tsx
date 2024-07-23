"use client";

import { useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import styles from '@/scss/components/ServiceTile.module.scss';

import forward from '@/../public/img/icons/forward.png';
import { determineLanguage } from '@/helpers/translations';

const ServiceTile = (
    {
        tileNumber,
        imageSrc,
        title,
        title2,
        description,
        descriptionBack,
    }: {
        tileNumber: number,
        imageSrc: StaticImageData,
        title: string,
        title2: string,
        description: string,
        descriptionBack: string,
    }): React.JSX.Element => {

    const language = determineLanguage()
    const [showMore, setShowMore] = useState(false)

    return (
        <div className={styles.serviceTile}>
            <div className={styles.front} >
                <div className={styles.tileHeader}>
                    <Image src={imageSrc} alt="Ikona usługi" />
                    <div className={styles.text}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.title2}>{title2}</p>
                    </div>
                </div>
                <div className={styles.hr} />
                <p className={styles.description}>
                    {description}
                </p>
                <label className={styles.tileFooter} htmlFor={`showMore${tileNumber}`}>
                    <input type='checkbox' id={`showMore${tileNumber}`} name={`showMore${tileNumber}`} checked={showMore} onChange={e => { setShowMore(e.target.checked) }} />
                    <p>{language === 'pl' ? 'Szczegóły' : 'Details'}</p>
                    <Image src={forward} alt="Szczegóły" />
                </label>
            </div>
            <div className={styles.back} >
                <p className={styles.description}>
                    {descriptionBack}
                </p>
                <label className={styles.tileFooter} htmlFor={`showLess${tileNumber}`} >
                    <input type='checkbox' id={`showLess${tileNumber}`} name={`showLess${tileNumber}`} checked={showMore} onChange={e => { setShowMore(e.target.checked) }} />
                    <Image src={forward} alt="Szczegóły" />
                    <p>{language === 'pl' ? 'Cofnij' : 'Back'}</p>

                </label>
            </div>
        </div >
    )
}

export default ServiceTile;