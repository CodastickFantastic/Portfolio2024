import styles from '@/scss/components/HeaderWithBulletPoints.module.scss';

import Image from 'next/image';
import ok from "@/../public/img/icons/ok.png";
import protect from "@/../public/img/icons/protect.png";


const HeaderWithBulletPoints = (
    { h1, underTitle, bullets, cta1, cta2, protectBadge }: { h1: string, underTitle: string, bullets: string[], cta1: { text: string, url: string }, cta2: { text: string, url: string }, protectBadge?: boolean }
): React.JSX.Element => {

    return (
        <section className={styles.header}>
            <h1 dangerouslySetInnerHTML={{ __html: h1 }} />
            <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: underTitle }} />
            <ul className={styles.bulletPoints}>
                {bullets.map((bullet, index) => {
                    return <li key={index}><Image src={ok} alt="Ikona ptaszka" /> {bullet}</li>
                })}
            </ul>
            <div className={styles.buttons}>
                <a href={cta1.url} className='button active'>{cta1.text}</a>
                <a href={cta2.url} className='button'>{cta2.text}</a>
            </div>
            {protectBadge &&
                <div className="badgeWithText">
                    <Image src={protect} alt="Ikona ptaszka" />
                    <p>Gwarancja <span className='purple'>satysfakcji</span> oraz najwyższej <span className='purple'>jakości</span></p>
                </div>
            }
        </section >
    )
}

export default HeaderWithBulletPoints;