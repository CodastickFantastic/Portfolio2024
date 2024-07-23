"use client"

import styles from "@/scss/components/NavigationBar.module.scss"
import Link from "next/link"
import Image from "next/image"

import Logo from "@/../public/img/logo.webp"
import burgerMenu from "@/../public/img/icons/menu.png"
import Close from "@/../public/img/icons/close.png"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { goToPolish, goToEnglish } from "@/helpers/translations"
import CustomLinkComponent from "../microComponents/CustomLinkComponent"

const NavigationBar = (): React.JSX.Element => {
    const pathname = usePathname()
    const fixedElement = useRef<HTMLDivElement>(null)
    const menuBtnRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        fixedElement.current?.addEventListener("touchmove", (e) => {
            e.preventDefault()
        }, false)

        return () => {
            fixedElement.current?.removeEventListener("touchmove", (e) => {
                e.preventDefault()
            })
        }
    }, [])

    const closeMenu = () => {
        if (menuBtnRef.current) {
            menuBtnRef.current.checked = false
        }
    }


    return (
        <nav className={styles.navigationBar}>
            <CustomLinkComponent href="/">
                <Image
                    alt="Usługi IT - Jakub Wojtysiak - Logo"
                    className={styles.logo}
                    src={Logo}
                />
            </CustomLinkComponent>
            <label htmlFor="burgerMenu" className={styles.burgerMenuLabel} >
                <input type="checkbox" id="burgerMenu" className={styles.burgerMenuInput} ref={menuBtnRef} />
                <Image src={burgerMenu} alt="Menu" className={styles.burgerMenu} />
            </label>
            <div className={styles.rightSection} ref={fixedElement}>
                <Image src={Close} alt="Schowaj menu" className={styles.burgerMenuClose} onClick={closeMenu} />
                <div className={styles.navLinks}>
                    <div className={styles.navItem}>
                        <CustomLinkComponent
                            className={styles.navItemText}
                            href="/"
                            onClick={closeMenu}
                            plText="Strona Główna"
                            enText="Home Page"
                        />
                    </div>
                    <div className={styles.navItem}>
                        <CustomLinkComponent
                            className={styles.navItemText}
                            href="/o-mnie"
                            onClick={closeMenu}
                            plText="O mnie"
                            enText="About me"
                        />
                    </div>
                    <div className={styles.navItem}>
                        <CustomLinkComponent
                            className={styles.navItemText}
                            href="/#uslugi"
                            onClick={closeMenu}
                            plText="Usługi"
                            enText="Services"
                        />
                    </div>
                    <div className={styles.navItem}>
                        <CustomLinkComponent
                            className={styles.navItemText}
                            href="/portfolio"
                            onClick={closeMenu}
                            plText="Portfolio"
                            enText="Portfolio"
                        />
                    </div>
                    <div className={styles.navItem}>
                        <CustomLinkComponent
                            className={styles.navItemText}
                            href="/blog-it"
                            onClick={closeMenu}
                            plText="Naucz Się IT"
                            enText="Learn IT"
                        />
                    </div>
                    <div className={styles.navItem}>
                        <CustomLinkComponent
                            className={styles.navItemText}
                            href="/#kontakt"
                            onClick={closeMenu}
                            plText="Kontakt"
                            enText="Contact"
                        />
                    </div>
                </div>
                <div className={styles.horizontalDivider} />
                <div className={styles.flagSection}>
                    <Link href={goToPolish(pathname)} onClick={closeMenu} className={`${styles.flag} ${styles.polishFlag}`} />
                    <Link href={goToEnglish(pathname)} onClick={closeMenu} className={`${styles.flag} ${styles.englishFlag}`} />
                </div>
            </div>
        </nav >
    )
}

export default NavigationBar


