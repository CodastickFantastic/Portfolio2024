import styles from "@/scss/components/processDescription.module.scss";

import Image from 'next/image';

import planning from '@/../public/img/icons/planning.png';
import pencil from '@/../public/img/icons/pencil.png';
import coding from '@/../public/img/icons/coding.png';
import testing from '@/../public/img/icons/test.png';
import cicd from '@/../public/img/icons/cicd.png';

const ProcessDescription = (): React.JSX.Element => {

    return (
        <section id="process" className={styles.processDescription}>
            <h2>Opis Współpracy</h2>
            <p>Droga do <span className="purple">suckesu</span> wymaga wielu <span className="purple">mniejszych</span> kroków</p>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <p className={styles.number}>1</p>
                    <p className={styles.title}>PLANOWANIE</p>
                    <p className={styles.pointDescription}>Poczatkowy etap kazdego projektu w trakcie którego ustalamy potrzeby oraz szczegóły inwestycji.</p>
                    <Image src={planning} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>2</p>
                    <p className={styles.title}>PROJEKTOWANIE</p>
                    <p className={styles.pointDescription}>Rozpoczynamy wizualizację projektu przy użyciu narzędzi takich jak Figma. Tworzymy logikę biznesową. </p>
                    <Image src={pencil} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>3</p>
                    <p className={styles.title}>PROGRAMOWANIE</p>
                    <p className={styles.pointDescription}>W zależności od skomplikowania projektu wybieramy najbardziej optymalne narzędzia i kodujemy.</p>
                    <Image src={coding} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>4</p>
                    <p className={styles.title}>TESTOWANIE</p>
                    <p className={styles.pointDescription}>Sprawdzamy czy wszsytko działa jak należy i wprowadzamy ewentualne poprawki.</p>
                    <Image src={testing} alt="Ikona planowania" />
                </div>
                <div className={styles.step}>
                    <div className={styles.triangle} />
                    <p className={styles.number}>5</p>
                    <p className={styles.title}>WDROŻENIE</p>
                    <p className={styles.pointDescription}>Kiedy wszystko jest już gotowe uruchamiamy produkcyjną wersję witryny i ją zabezpieczamy.</p>
                    <Image src={cicd} alt="Ikona planowania" />
                </div>
            </div>
        </section>
    )
};

export default ProcessDescription;