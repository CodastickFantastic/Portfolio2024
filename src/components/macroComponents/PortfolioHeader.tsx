import styles from '@/scss/components/PortfolioHeader.module.scss';

import Image from 'next/image';
import protect from "@/../public/img/icons/protect.png";


const PortfolioHeader = (): React.JSX.Element => {

    return (
        <section className={styles.portfolioHeader}>
            <h1>Moje <span className="purple">portfolio</span></h1>
            <p className={styles.paragraph}>Poświęć chwilę i sprawdź moje ostatnie realizacje</p>
            <p className={styles.paragraph}>Każda z tych prac była innym fascynującym wyzwaniem</p>
            <p className={styles.paragraph}>Dowiedz się na przykładach innych jak wygląda współpraca ze mną</p>
            <div className={styles.buttons}>
                <a href="/#kontakt" className='button active'>Nawiążmy Kontakt</a>
                <a href="/o-mnie" className='button'>O mnie</a>
            </div>
            <div className="badgeWithText">
                <Image src={protect} alt="Ikona ptaszka" />
                <p>Gwarancja <span className='purple'>satysfakcji</span> oraz najwyższej <span className='purple'>jakości</span></p>
            </div>
        </section >
    )
}

export default PortfolioHeader;