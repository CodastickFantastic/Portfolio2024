import Image from 'next/image';
import styles from '@/scss/components/blogComponents/ArticleHeader.module.scss'


import BlogNewsletter from "@/components/blogComponents/BlogNewsletter"

import Link from 'next/link';
import ArticleImportantInfo from './ArticleImportantInfo';

export default function BlogHeader({ h1, contentsTitle, headerImg }) {
    return (
        <header className={styles.articleHeader}>
            <div className={styles.leftColumn} style={{ marginBottom: 24 }}>
                <h1 className={styles.blogHeader}>Naucz się <span className='purple'>IT</span> już dziś<span className={styles.beta}>BETA</span></h1>
                <p className={`${styles.contentsTitle} ${styles.blogMainParagraph}`} dangerouslySetInnerHTML={{ __html: contentsTitle }} />
                <BlogNewsletter />
            </div>
            <div className={styles.rightColumn}>
                <Image src={headerImg} alt={h1} width={570} />
            </div>
        </header >
    )
}