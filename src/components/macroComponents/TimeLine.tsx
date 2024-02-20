import styles from '@/scss/components/History.module.scss';

import TimeLineTile from '../microComponents/TimeLineTile';

import master from '@/../public/img/icons/master.png';
import suitcase from '@/../public/img/icons/suitcase.png';
import book from '@/../public/img/icons/book.png';
import website from '@/../public/img/icons/website.png';
import hands from '@/../public/img/icons/hands.png';

const TimeLine = (): React.JSX.Element => {
    return (
        <section id="time-line" className={styles.timeLine}>
            <h2 >Time Line</h2>
            <p>Ważne daty w <span className='purple'>mojej</span> karierze</p>

            <TimeLineTile
                icon={master}
                date="Czerwiec 2019"
                title="Ukończenie Studiów Licencjackich"
                info="Ekonomia i Rynki Zagraniczne"
                description={["Akademia Leona Koźmińskiego"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={book}
                date="Styczeń 2020"
                title="Zainteresowanie Cybersecurity"
                info="Aktywna Nauka Cyberbezpieczeństwa"
                description={["Podstawy Pythona", "Administracja Linuxa", "Zagadnienia Sieciowe", "Red Team", "Blue Team"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={master}
                date="Czerwiec 2021"
                title="Ukończenie Studiów Magisterskich"
                info="Zarządzanie i Logistyka"
                description={["Akademia Leona Koźmińskiego"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={website}
                date="Sierpień 2021"
                title="Nauka Web Developmentu"
                info="Odnalezienie Pasji w Programowaniu"
                description={["HTML/CSS", "JavaScript", "React/React Narive", "NextJs", "Figma", "Web Design", "Marketing Internetowy"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={suitcase}
                date="Marzec 2022"
                title="Poszerzenie Działalności Gospodarczej"
                info="Szerokopojęte Usługi IT"
                description={["Programowanie Aplikacji Webowych", "Programowanie Aplikacji Mobilnych", "Administracja Serwerami", "Projektowanie Graficzne", "Marketing Internetowy"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={hands}
                date="Do dziś"
                title="Aktywny Freelancing"
            />
        </section>
    )
};

export default TimeLine;