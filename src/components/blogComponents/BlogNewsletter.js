"use client"

import styles from '@/scss/components/blogComponents/BlogNewsletter.module.scss'

export default function BlogNewsletter() {

    function submitForm() {
        event.preventDefault()
        console.log("Formularz został wysłany");
    }

    return (
        < div className={styles.blogNewsletter} >
            <div className={styles.newsletterTitle}>
                <h2>Newsleter IT</h2>
                <div className={styles.newsletterIcon} />
            </div>
            <p>Subskrybując mój newsletter otrzymasz za darmo:</p>
            <ol>
                <li>0 SPAMU</li>
                <li>Kursy programowania JavaScript</li>
                <li>Kursy Devops</li>
                <li>Najlepsze Zasady Bezpieczeńśtwa</li>
                <li>Będziesz zawsze ze mną na bieżąco</li>
            </ol>
            <form onSubmit={submitForm}>
                <input type="email" placeholder="Twoj adres e-mail" />
                <button type="submit">Chcę wejść do IT</button>
            </form>
            <div className={styles.formStatus}>Zweryfikuj poprawność swoich danych</div>
        </div >
    )
}