import styles from "@/scss/components/Footer.module.scss"
import Link from "next/link"

const Footer = (): React.JSX.Element => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerInnerContainer}>
                    <p>© 2024 Usługi IT Jakub Wojtysiak</p>
                    <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
                    <p>Icons by:<Link href="https://icons8.com/" rel="nofollow">Icons8</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer


