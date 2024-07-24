"use client"

import styles from '@/scss/components/blogComponents/BlogNewsletter.module.scss'
import { useState } from 'react';

export default function BlogNewsletter() {
    const [formResponse, setFormResponse] = useState(false)

    async function submitForm() {
        event.preventDefault()
        console.log("Formularz został wysłany");

        const request = await fetch("/api/mail/newsletter/subscribe", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                email: event.target.email.value,
            }),
        })

        const response = await request.json()
        console.log(response)

        if (response.error) {
            setFormResponse(response.error)
        } else {
            setFormResponse(response.success)
        }

    }

    return (
        < div className={styles.blogNewsletter} >
            <div className={styles.newsletterTitle}>
                <h2>Newsleter IT</h2>
                <div className={styles.newsletterIcon} />
            </div>
            <p>Nie przegap żadnych nowości !</p>
            <form onSubmit={submitForm}>
                <input type="email" id="email" name="email" placeholder="Twoj adres e-mail" />
                <button type="submit">Chcę wejść do IT</button>
            </form>
            {formResponse && <div className={styles.formStatus}>{formResponse}</div>}

        </div >
    )
}