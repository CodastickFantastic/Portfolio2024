"use client"

import styles from "@/scss/components/NavigationBar.module.scss"
import Link from "next/link"
import Image from "next/image"

import Logo from "@/../public/img/logo.png"
import burgerMenu from "@/../public/img/icons/menu.png"
import Close from "@/../public/img/icons/close.png"
import { useEffect, useRef } from "react"

const NavigationBar = (): React.JSX.Element => {

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
            <Link href="/">
                <Image
                    alt="Usługi IT - Jakub Wojtysiak - Logo"
                    className={styles.logo}
                    src={Logo}
                />
            </Link>
            <label htmlFor="burgerMenu" className={styles.burgerMenuLabel} >
                <input type="checkbox" id="burgerMenu" className={styles.burgerMenuInput} ref={menuBtnRef} />
                <Image src={burgerMenu} alt="Menu" className={styles.burgerMenu} />
            </label>
            <div className={styles.rightSection} ref={fixedElement}>
                <Image src={Close} alt="Schowaj menu" className={styles.burgerMenuClose} onClick={closeMenu} />
                <div className={styles.navLinks}>
                    <div className={styles.navItem}>
                        <Link className={`${styles.navItemText} ${styles.selected}`} href="/" onClick={closeMenu}>
                            Strona Główna
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/o-mnie" onClick={closeMenu}>O mnie</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/#usługi" onClick={closeMenu} >Usługi</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/portfolio" onClick={closeMenu} >Portfolio</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/#kontakt" onClick={closeMenu} >Kontakt</Link>
                    </div>
                </div>
                <div className={styles.horizontalDivider} />
                <div className={styles.flagSection}>
                    <img
                        alt=""
                        className={styles.flag}
                        src="https://static.overlay-tech.com/assets/2d26e259-59fe-492f-abd4-0e47b4545d7f.png"
                    />
                    <img
                        alt=""
                        className={styles.flag}
                        src="https://static.overlay-tech.com/assets/bfe5d8a9-d149-46a8-a0f9-5484b59fc391.png"
                    />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar


