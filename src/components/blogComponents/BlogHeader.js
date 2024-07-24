import Image from 'next/image';
import styles from '@/scss/components/blogComponents/ArticleHeader.module.scss'


// import BlogNewsletter from "@/components/blogComponents/BlogNewsletter"

export default function BlogHeader({ h1, contentsTitle, headerImg }) {
    return (
        <header className={styles.articleHeader}>
            <div className={styles.leftColumn} style={{ marginBottom: 24 }}>
                <h1 className={styles.blogHeader} dangerouslySetInnerHTML={{ __html: h1 }} />
                <p className={`${styles.contentsTitle} ${styles.blogMainParagraph}`} dangerouslySetInnerHTML={{ __html: contentsTitle }} />
                {/* <BlogNewsletter /> */}
            </div>
            <div className={styles.rightColumn}>
                <Image src={headerImg} alt={h1} width={570} />
            </div>
        </header >
    )
}