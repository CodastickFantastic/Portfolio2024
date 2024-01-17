"use client"

import styles from "@/scss/components/PersonSlider.module.scss";

import Image from "next/image"

import PersonCard from "@/components/microComponents/PersonCard";

import arrow from "@/../public/img/icons/arrow.png"
import devopsBg from "@/../public/img/devopsBg.png";
import admin from "@/../public/img/admin.png";
import infinityArrow from "@/../public/img/icons/infinityArrow.png";
import webdevBg from "@/../public/img/webdevBg.png";
import programmer from "@/../public/img/programmer.png";
import programming from "@/../public/img/icons/programming.png";
import uiuxBg from "@/../public/img/uiuxBg.png";
import designer from "@/../public/img/designer.png";
import design from "@/../public/img/icons/design.png";
import solutionBg from "@/../public/img/solutionBg.png";
import solutionArchitekt from "@/../public/img/solutionArchitekt.png";
import bulb from "@/../public/img/icons/bulb.png";
import { useRef } from "react";

const PersonSlider = (): React.JSX.Element => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const sliderTrackRef = useRef<HTMLDivElement>(null)

    const moveSlide = (direction: "left" | "right"): void => {
        const sliderWidth = sliderTrackRef.current?.clientWidth as number
        const singleSlideWidth = (sliderWidth / sliderTrackRef.current?.childElementCount) + 7 as number


        if (direction === "left") {
            sliderRef.current?.scrollBy({ left: singleSlideWidth, behavior: "smooth" })
        } else {
            sliderRef.current?.scrollBy({ left: -singleSlideWidth, behavior: "smooth" })
        }
    }

    return (
        <div className={styles.personSlider}>
            <p className={styles.p1}>Jeden człowiek, <span className="purple">wiele oblicz</span></p>
            <div className={styles.slider} ref={sliderRef}>
                <div className={styles.slideTrack} ref={sliderTrackRef}>
                    <div className={styles.slide}>
                        <PersonCard
                            color="#673de6"
                            imageBg={devopsBg}
                            imageBgAlt="Tło z fioletowymi napisami DevOps"
                            imageFg={admin}
                            imageFgAlt="Usmiechnięty mężczyzna z komputerem"
                            icon={infinityArrow}
                            label="SystemAdmin" />
                    </div>
                    <div className={styles.lide}>
                        <PersonCard
                            color="#FC5185"
                            imageBg={webdevBg}
                            imageBgAlt="Tło z różowymi napisami WebDev"
                            imageFg={programmer}
                            imageFgAlt="Skupiony mężczyzna trzymający laptopa"
                            icon={programming}
                            label="WebDeveloper" />
                    </div>
                    <div className={styles.slide}>
                        <PersonCard
                            color="#50C895"
                            imageBg={uiuxBg}
                            imageBgAlt="Tło z zielonymi napisami UI/UX"
                            imageFg={designer}
                            imageFgAlt="Zamyślony mężczyzna trzymający tablet"
                            icon={design}
                            label="InterfaceDesigner" />
                    </div>
                    <div className={styles.slide}>
                        <PersonCard
                            color="#0F52BA"
                            imageBg={solutionBg}
                            imageBgAlt="Tło z niebieskimi napisami Solution"
                            imageFg={solutionArchitekt}
                            imageFgAlt="Pewny siebie mężczyzna w garniturze i kamizelce"
                            icon={bulb}
                            label="SolutionArchitekt" />
                    </div>
                </div>
            </div>
            <div className={styles.sliderNav}>
                <div className={styles.prev} onClick={() => moveSlide("right")}><Image src={arrow} alt="Przewiń w tył" /><p className={styles.navText}>Tył</p></div>
                <div className={styles.next} onClick={() => moveSlide("left")}><p className={styles.navText}>Przód</p><Image src={arrow} alt="Przewiń w przód" /></div>
            </div >
        </div >
    )
}

export default PersonSlider