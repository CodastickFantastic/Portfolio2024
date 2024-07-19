"use client"
import styles from '@/scss/components/blogComponents/BlogNavigator.module.scss'
import Link from 'next/link';

import { usePathname } from "next/navigation";


export default function BlogNavigator({ hardCodedPreviousPage, previousLesson, nextLesson }) {
    const location = usePathname()
    let previousPageArray = location.split("/")
    previousPageArray.pop()
    const previousPage = previousPageArray.join("/")

    return (
        <div className={styles.blogNavigator}>
            <Link href={hardCodedPreviousPage ? hardCodedPreviousPage : previousPage} className={`${styles.linkBtn} ${styles.pink}`}><span className={`${styles.icon} ${styles.arrowBack}`} />Powrót</Link>
            <div className={styles.lessonsNavigator}>
                {previousLesson && <Link href={previousLesson.url} className={styles.linkBtn}><span className={`${styles.icon} ${styles.arrowBack}`} /> {previousLesson.title}</Link>}
                {nextLesson && <Link href={nextLesson.url} className={styles.linkBtn}>{nextLesson.title} <span className={`${styles.icon} ${styles.arrowNext}`} /></Link>}
            </div>
        </div>
    )
}