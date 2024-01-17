import styles from "@/scss/components/NavigationBar.module.scss"
import Link from "next/link"

const NavigationBar = (): React.JSX.Element => {
    return (
        <nav className={styles.navigationBar}>
            <Link href="/">
                <img
                    alt="Usługi IT - Jakub Wojtysiak - Logo"
                    className={styles.logo}
                    src="https://static.overlay-tech.com/assets/7894b333-dfb1-416d-af8b-4732b45d0f1c.png"
                />
            </Link>
            <div className={styles.rightSection}>
                <div className={styles.navLinks}>
                    <div className={styles.navItem}>
                        <Link className={`${styles.navItemText} ${styles.selected}`} href="/">
                            Strona Główna
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/o-mnie">O mnie</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/" >Usługi</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/" >Portfolio</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link className={styles.navItemText} href="/" >Kontakt</Link>
                    </div>
                </div>
                <div className={styles.horizontalDivider} />
                <div className={styles.rightSection}>
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


