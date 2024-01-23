import styles from '@/scss/components/HeaderWithBulletPoints.module.scss';

import Image from 'next/image';
import ok from "@/../public/img/icons/ok.png";
import protect from "@/../public/img/icons/protect.png";


const HeaderWithBulletPoints = (): React.JSX.Element => {

    return (
        <section className={styles.header}>
            <h1>Strony <span className="purple">internetowe </span>i marketing</h1>
            <p className={styles.paragraph}>Pozwól sobie pomóc i <span className='purple'>zaistniej</span> ze mną w sieci</p>
            <ul className={styles.bulletPoints}>
                <li><Image src={ok} alt="Ikona ptaszka" /> Wordpress</li>
                <li><Image src={ok} alt="Ikona ptaszka" /> Strony Internetowe</li>
                <li><Image src={ok} alt="Ikona ptaszka" /> Systemy Informatyczne</li>
                <li><Image src={ok} alt="Ikona ptaszka" /> Aplikacje Mobilne</li>
                <li><Image src={ok} alt="Ikona ptaszka" /> Administracja Serwerów</li>
                <li><Image src={ok} alt="Ikona ptaszka" /> Wizualizacja UI</li>
                <li><Image src={ok} alt="Ikona ptaszka" /> Hosting</li>
            </ul>
            <div className={styles.buttons}>
                <a href="#kontakt" className='button active'>Nawiążmy Kontakt</a>
                <a href="/portfolio" className='button'>Portfolio</a>
            </div>
            <div className="badgeWithText">
                <Image src={protect} alt="Ikona ptaszka" />
                <p>Gwarancja <span className='purple'>satysfakcji</span> oraz najwyższej <span className='purple'>jakości</span></p>
            </div>
        </section >
    )
}

export default HeaderWithBulletPoints;