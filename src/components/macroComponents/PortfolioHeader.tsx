"use client";

import styles from '@/scss/components/PortfolioHeader.module.scss';

import Image from 'next/image';
import protect from "@/../public/img/icons/protect.png";
import { determineLanguage } from '@/helpers/translations';


const PortfolioHeader = (): React.JSX.Element => {
    const language = determineLanguage();

    return (
        <section className={styles.portfolioHeader}>
            <h1 dangerouslySetInnerHTML={{ __html: language === "pl" ? "Moje <span class='purple'>portfolio</span>" : "My <span class='purple'>portfolio</span>" }} />
            <p className={styles.paragraph}>{language === "pl" ? "Poświęć chwilę i sprawdź moje ostatnie realizacje" : "Please take a moment and check out my latest projects"}</p>
            <p className={styles.paragraph}>{language === "pl" ? "Każda z tych prac była innym fascynującym wyzwaniem" : "Each of these jobs was a different, fascinating challenge"}</p>
            <p className={styles.paragraph}>{language === "pl" ? "Dowiedz się na przykładach innych jak wygląda współpraca ze mną" : "Find out from the examples of others what cooperation with me looks like"}</p>
            <div className={styles.buttons}>
                <a href={language === "pl" ? "/#kontakt" : "/en/#contact"} className='button active'>{language === "pl" ? "Nawiążmy Kontakt" : "Let's stay in touch"}</a>
                <a href={language === "pl" ? "/o-mnie" : "/en/about-me"} className='button'>{language === "pl" ? "O mnie" : "About Me"}</a>
            </div>
            <div className="badgeWithText">
                <Image src={protect} alt="Ikona ptaszka" />
                <p dangerouslySetInnerHTML={{ __html: language === "pl" ? 'Gwarancja <span class="purple">satysfakcji</span> oraz najwyższej <span class="purple">jakości</span>' : 'Guarantee of <span class="purple">satisfaction</span> and the highest <span class="purple">quality</span>' }} />
            </div>
        </section >
    )
}

export default PortfolioHeader;