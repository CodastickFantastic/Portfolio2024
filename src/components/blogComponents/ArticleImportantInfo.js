import styles from '@/scss/components/blogComponents/ArticleImportantInfo.module.scss'
import Link from 'next/link'

export default function ArticleImportantInfo({ type, title, content, cta, listContent }) {

    return (
        <div className={styles.articleImportantInfo} style={{ backgroundColor: type === "warning" ? "#FC5185" : type === "hint" ? "#00B090" : "#FFD700" }}>
            <div className={styles.infoHeader}>
                <p className={styles.title} style={{ color: type === "how" ? "#261A4C" : "#ffffff" }} >{title}</p>
                <div className={`${styles.icon} ${styles[`${type}Icon`]}`} />
            </div>
            {listContent ?
                <ul className={styles.content} style={{ color: type === "how" ? "#261A4C" : "#ffffff" }} dangerouslySetInnerHTML={{ __html: listContent }} /> :
                <p className={styles.content} style={{ color: type === "how" ? "#261A4C" : "#ffffff" }} dangerouslySetInnerHTML={{ __html: content }} />
            }

            {cta && <Link href={cta.link} className={styles.cta} dangerouslySetInnerHTML={{ __html: cta.text }} target='_blank' />}
        </div>
    )
}