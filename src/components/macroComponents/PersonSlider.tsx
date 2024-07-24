"use client"

import styles from "@/scss/components/PersonSlider.module.scss";

import { useRef } from "react";
import Image from "next/image"

import PersonCard from "@/components/microComponents/PersonCard";

import arrow from "@/../public/img/icons/arrow.png"
import devopsBg from "@/../public/img/devopsBg.webp";
import admin from "@/../public/img/admin.webp";
import infinityArrow from "@/../public/img/icons/infinityArrow.png";
import webdevBg from "@/../public/img/webdevBg.webp";
import programmer from "@/../public/img/programmer.webp";
import programming from "@/../public/img/icons/programming.png";
import uiuxBg from "@/../public/img/uiuxBg.webp";
import designer from "@/../public/img/designer.webp";
import design from "@/../public/img/icons/design.png";
import solutionBg from "@/../public/img/solutionBg.webp";
import solutionArchitekt from "@/../public/img/solutionArchitekt.webp";
import bulb from "@/../public/img/icons/bulb.png";
import { determineLanguage } from "@/helpers/translations";


const PersonSlider = (): React.JSX.Element => {
    const language = determineLanguage()
    const sliderRef = useRef<HTMLDivElement>(null)
    const sliderTrackRef = useRef<HTMLDivElement>(null)

    const moveSlide = (direction: "left" | "right"): void => {
        const sliderWidth = sliderTrackRef.current?.clientWidth as number
        const singleSlideWidth = (sliderWidth / sliderTrackRef.current!.childElementCount) + 7 as number


        if (direction === "left") {
            sliderRef.current?.scrollBy({ left: singleSlideWidth, behavior: "smooth" })
        } else {
            sliderRef.current?.scrollBy({ left: -singleSlideWidth, behavior: "smooth" })
        }
    }

    return (
        <div className={styles.personSlider}>
            <p className={styles.p1} dangerouslySetInnerHTML={{ __html: language === "pl" ? "Jeden człowiek, <span class='purple'>wiele oblicz</span>" : "One man, <span class='purple'>with many faces</span>" }} />
            <div className={styles.slider} ref={sliderRef}>
                <div className={styles.slideTrack} ref={sliderTrackRef}>
                    {language === "pl" ?
                        <>
                            <div className={styles.slide}>
                                <PersonCard
                                    color="#673de6"
                                    imageBg={devopsBg}
                                    imageBgAlt="Tło z fioletowymi napisami DevOps"
                                    imageFg={admin}
                                    imageFgAlt="Usmiechnięty mężczyzna z komputerem"
                                    icon={infinityArrow}
                                    label="SystemAdmin"
                                    showMoreNo={1}
                                    description="Moja przygoda z administracją serwerami zaczęła się w 2021 roku, kiedy to stawiałem pierwsze kroki w CyberBezpieczeństwie. Szkolenia z zakresu Red oraz Blue Team dały mi świadomość o wektorach ataków oraz metodach obrony. Poznałem wtedy dogłębnie metodykę pracy z Linuxem oraz wszelkiego rodzaju zagadnienia sieciowe. Na dzień dzisiejszy konfiguracja DNS oraz serwerów WWW to moja codzienność (zarządzam  około 40 domenami oraz 3 serwerami VPS)"
                                />
                            </div>
                            <div className={styles.lide}>
                                <PersonCard
                                    color="#FC5185"
                                    imageBg={webdevBg}
                                    imageBgAlt="Tło z różowymi napisami WebDev"
                                    imageFg={programmer}
                                    imageFgAlt="Skupiony mężczyzna trzymający laptopa"
                                    icon={programming}
                                    label="WebDeveloper"
                                    showMoreNo={2}
                                    description="Programowanie stało się moją pasją juz w 2022 roku gdy pisałem swoje pierwsze crowlery oraz boty autoamtyzujące prace w Pythonie. Pomimo tego, że bardzo lubiłem ten język porgramowania postanowiłem przejść na JavaScript ze względu na chęć tworzenia aplikacji Webowych. Na dzień dzisiejszy specjalizuję się w tworzeniu aplikacji w NextJS, a co za tym idzie równiez w React. Moja sympataia do NextJs w głównej mierze wynika z łatwości i szybkości tworzenia backendowych API."
                                />
                            </div>
                            <div className={styles.slide}>
                                <PersonCard
                                    color="#50C895"
                                    imageBg={uiuxBg}
                                    imageBgAlt="Tło z zielonymi napisami UI/UX"
                                    imageFg={designer}
                                    imageFgAlt="Zamyślony mężczyzna trzymający tablet"
                                    icon={design}
                                    label="InterfaceDesigner"
                                    showMoreNo={3}
                                    description="Na początku mojej przygody z WebDevelopmentem nie przykładałem szczególnej uwagi do estetyki moich prac, na szczęście szybko zdałem sobie sprawę z faktu że UI to tak naprawdę główny czynnik decydujący o sukcesie danej aplikacji tuż po logice biznesowej. Początki były trudne jednakże im wiecej czasu poświecałem na praktykę tym adekwatnie lepsze Interwfejsy byłem w stanie tworzyć. Na dzień dzisiejszy tworzenie UI/UX stało się dla mnie nieodłącznym elementem tworzenia kazdej aplikacji."
                                />
                            </div>
                            <div className={styles.slide}>
                                <PersonCard
                                    color="#0F52BA"
                                    imageBg={solutionBg}
                                    imageBgAlt="Tło z niebieskimi napisami Solution"
                                    imageFg={solutionArchitekt}
                                    imageFgAlt="Pewny siebie mężczyzna w garniturze i kamizelce"
                                    icon={bulb}
                                    label="SolutionArchitekt"
                                    showMoreNo={4}
                                    description="Ty masz problem, ja mam rozwiązanie. Każdy klient, z którym współpracuję przychodzi do mnie ze swego rodzaju prbolemem, który muszę rozwiązać niezalęznie od tego czy dana osoba potrzebuje tylko opieki nad swoim serwerem czy rozbudowanej aplikacji webowej. Jako SolutionArchitekt moim zadaniem jest znalezienie najbardziej optymalnych rozwiązań do problemów moich klientów. Jestem odpowiedzialny od początku do końca za każdy projekt, który realizuję."
                                />
                            </div>
                        </>
                        : language === "en" &&
                        <>
                            <div className={styles.slide}>
                                <PersonCard
                                    color="#673de6"
                                    imageBg={devopsBg}
                                    imageBgAlt="Background with purple DevOps inscriptions"
                                    imageFg={admin}
                                    imageFgAlt="Smiling man with a computer"
                                    icon={infinityArrow}
                                    label="SystemAdmin"
                                    showMoreNo={1}
                                    description="My adventure with server administration began in 2021, when I took my first steps in Cybersecurity. Red and Blue Team training gave me awareness of attack vectors and defense methods. I then learned in depth the methodology of working with Linux and all kinds of network issues. Currently, DNS and web server configuration is my daily routine (I manage about 40 domains and 3 VPS servers)"
                                />
                            </div>
                            <div className={styles.lide}>
                                <PersonCard
                                    color="#FC5185"
                                    imageBg={webdevBg}
                                    imageBgAlt="Background with pink WebDev inscriptions"
                                    imageFg={programmer}
                                    imageFgAlt="Concentrated man holding a laptop"
                                    icon={programming}
                                    label="WebDeveloper"
                                    showMoreNo={2}
                                    description="Programming became my passion already in 2022, when I wrote my first crowlers and bots that automate work in Python. Even though I really liked this programming language, I decided to switch to JavaScript because I wanted to create web applications. Currently, I specialize in creating applications in NextJS, and therefore also in React. My preference for NextJs is mainly due to the ease and speed of creating backend APIs."
                                />
                            </div>
                            <div className={styles.slide}>
                                <PersonCard
                                    color="#50C895"
                                    imageBg={uiuxBg}
                                    imageBgAlt="Background with green UI/UX inscriptions"
                                    imageFg={designer}
                                    imageFgAlt="Pensive man holding a tablet"
                                    icon={design}
                                    label="InterfaceDesigner"
                                    showMoreNo={3}
                                    description="At the beginning of my adventure with WebDevelopment, I did not pay much attention to the aesthetics of my work, fortunately, I quickly realized that UI is actually the main factor determining the success of a given application, after business logic. The beginnings were difficult, but the more time I devoted to practice, the better the interfaces I was able to create. Today, creating UI/UX has become an integral part of creating every application for me."
                                />
                            </div>
                            <div className={styles.slide}>
                                <PersonCard
                                    color="#0F52BA"
                                    imageBg={solutionBg}
                                    imageBgAlt="Background with blue Solution inscriptions"
                                    imageFg={solutionArchitekt}
                                    imageFgAlt="Confident man in a suit and vest"
                                    icon={bulb}
                                    label="SolutionArchitekt"
                                    showMoreNo={4}
                                    description="You got a problem, I have a solution. Each client I work with comes to me with some kind of problem that I have to solve, regardless of whether the person only needs to take care of their server or an extensive web application. As a SolutionArchitect, my task is to find the most optimal solutions to my clients' problems. I am responsible from start to finish for every project I implement."
                                />
                            </div>
                        </>}

                </div>
            </div>
            <div className={styles.sliderNav}>
                <div className={styles.prev} onClick={() => moveSlide("right")}><Image src={arrow} alt="Przewiń w tył" /><p className={styles.navText}>{language === "pl" ? "Tył" : "Back"}</p></div>
                <div className={styles.next} onClick={() => moveSlide("left")}><p className={styles.navText}>{language === "pl" ? "Przód" : "Next"}</p><Image src={arrow} alt="Przewiń w przód" /></div>
            </div >
        </div >
    )
}

export default PersonSlider