"use client"

import styles from '@/scss/components/History.module.scss';

import TimeLineTile from '../microComponents/TimeLineTile';

import master from '@/../public/img/icons/master.png';
import suitcase from '@/../public/img/icons/suitcase.png';
import book from '@/../public/img/icons/book.png';
import website from '@/../public/img/icons/website.png';
import hands from '@/../public/img/icons/hands.png';
import { determineLanguage } from '@/helpers/translations';

const TimeLine = (): React.JSX.Element => {
    const language = determineLanguage()
    return (
        <section id="time-line" className={styles.timeLine}>
            <h2 >Time Line</h2>
            <p dangerouslySetInnerHTML={{ __html: language === "pl" ? "Ważne daty w <span class='purple'>mojej</span> karierze" : "Important dates in <span class='purple'>my</span> career" }} />
            {language === "pl" ?
                <>
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
                </> : language === "en" && <>
                    <TimeLineTile
                        icon={master}
                        date="June 2019"
                        title="Completion of Bachelor's Studies"
                        info="Economics and Foreign Markets"
                        description={["Leon Koźmiński Academy"]}
                    />
                    <div className={styles.vl} />
                    <TimeLineTile
                        icon={book}
                        date="January 2020"
                        title="Interest Cybersecurity"
                        info="Active Cybersecurity Learning"
                        description={["Python Basics", "Linux Administration", "Network Issues", "Red Team", "Blue Team"]}
                    />
                    <div className={styles.vl} />
                    <TimeLineTile
                        icon={master}
                        date="June 2021"
                        title="Completion of Master's Studies"
                        info="Management and Logistics"
                        description={["Leon Koźmiński Academy"]}
                    />
                    <div className={styles.vl} />
                    <TimeLineTile
                        icon={website}
                        date="August 2021"
                        title="Learning Web Development"
                        info="Finding Passion in Programming"
                        description={["HTML/CSS", "JavaScript", "React/React Narive", "NextJs", "Figma", "Web Design", "Internet Marketing"]}
                    />
                    <div className={styles.vl} />
                    <TimeLineTile
                        icon={suitcase}
                        date="March 2022"
                        title="Expanding Business Activities"
                        info="Broadly understood IT Services"
                        description={["Web Application Development", "Mobile Application Development", "Server Administration", "Graphic Design", "Internet Marketing"]}
                    />
                    <div className={styles.vl} />
                    <TimeLineTile
                        icon={hands}
                        date="Until today"
                        title="Active Freelancing"
                    />
                </>
            }
        </section>
    )
};

export default TimeLine;