import Image from 'next/image';

import styles from '@/scss/components/blogComponents/ArticleHeader.module.scss'
import Link from 'next/link';

export default function ArticleHeader({ h1, articleInfo, contentsTitle, contents, headerImg, underTitle }) {

    return (
        <header className={styles.articleHeader}>
            <div className={styles.leftColumn}>
                <h1 dangerouslySetInnerHTML={{ __html: h1 }} />
                {underTitle && <p className={styles.underTitle}>{underTitle}</p>}
                {articleInfo &&
                    <div className={styles.articleInfo}>
                        <div className={`${styles.infoTile} ${styles.time}`}>
                            <span className={`${styles.icon} ${styles.timeIcon}`} />
                            <p>{articleInfo.time}</p>
                        </div>
                        <div className={`${styles.infoTile} ${styles.specialization}`}>
                            <span className={`${styles.icon} ${styles.bookIcon}`} />
                            <p>{articleInfo.specialization}</p>
                        </div>
                        <div className={`${styles.infoTile} ${styles.level}`}>
                            <span className={`${styles.icon} ${styles.levelIcon}`} />
                            <p>{articleInfo.level}</p>
                        </div>
                    </div>}
                <p className={styles.contentsTitle}><span className={`${styles.icon} ${styles.pageIcon}`} />{contentsTitle}</p>
                <div className={styles.contents}>
                    {contents.map((item, index) => {
                        return <Link href={item.url} key={index}><span className={`${styles.icon} ${styles[`key_${index + 1}Icon`]}`} />{item.text}</Link>
                    })}
                </div>
            </div>
            <div className={styles.rightColumn}>
                <Image src={headerImg} alt={h1} width={570} />
            </div>
        </header >
    )
}