"use client";

import styles from "@/scss/components/ProcessDescription.module.scss";

import Image from 'next/image';

import planning from '@/../public/img/icons/planning.png';
import pencil from '@/../public/img/icons/pencil.png';
import coding from '@/../public/img/icons/coding.png';
import testing from '@/../public/img/icons/test.png';
import cicd from '@/../public/img/icons/cicd.png';
import { determineLanguage } from "@/helpers/translations";

const ProcessDescription = (): React.JSX.Element => {
    const language = determineLanguage()

    return (
        <section id="process" className={styles.processDescription}>
            <h2>{language === "pl" ? "Opis Współpracy" : "Process Description"}</h2>
            <p dangerouslySetInnerHTML={{ __html: language === "pl" ? 'Droga do <span class="purple">suckesu</span> wymaga wielu <span class="purple">mniejszych</span> kroków' : 'The path to <span class="purple">success</span> requires many <span class="purple">smaller</span> steps' }} />
            <div className={styles.steps}>
                <div className={styles.step}>
                    <p className={styles.number}>1</p>
                    <p className={styles.title}>{language === "pl" ? "PLANOWANIE" : "PLANNING"}</p>
                    <p className={styles.pointDescription}>{language === "pl" ? "Poczatkowy etap kazdego projektu w trakcie którego ustalamy potrzeby oraz szczegóły inwestycji." : "The initial stage of each project during which we determine the needs and investment details."}</p>
                    <Image src={planning} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>2</p>
                    <p className={styles.title}>{language === "pl" ? "PROJEKTOWANIE" : "DESIGN"}</p>
                    <p className={styles.pointDescription}>{language === "pl" ? "Rozpoczynamy wizualizację projektu przy użyciu narzędzi takich jak Figma. Tworzymy logikę biznesową. " : "We start visualizing the design using tools like Figma. We create business logic."}</p>
                    <Image src={pencil} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>3</p>
                    <p className={styles.title}>{language === "pl" ? "PROGRAMOWANIE" : "DEVELOPMENT"}</p>
                    <p className={styles.pointDescription}>{language === "pl" ? "W zależności od skomplikowania projektu wybieramy najbardziej optymalne narzędzia i kodujemy." : "Depending on the complexity of the project, we select the most optimal tools and start coding."}</p>
                    <Image src={coding} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>4</p>
                    <p className={styles.title}>{language === "pl" ? "TESTOWANIE" : "TESTING"}</p>
                    <p className={styles.pointDescription}>{language === "pl" ? "Sprawdzamy czy wszsytko działa jak należy i wprowadzamy ewentualne poprawki." : "We check whether everything works properly and make any necessary corrections if needed."}</p>
                    <Image src={testing} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>5</p>
                    <p className={styles.title}>{language === "pl" ? "WDROŻENIE" : "IMPLEMENTATION"}</p>
                    <p className={styles.pointDescription}>{language === "pl" ? "Kiedy wszystko jest gotowe uruchamiamy produkcyjności wersji witryny i ją zabezpieczamy." : "When everything is ready, we launch the production version of the website and secure it."}</p>
                    <Image src={cicd} alt="Ikona planowania" />
                </div>
            </div>
        </section>
    )
};

export default ProcessDescription;