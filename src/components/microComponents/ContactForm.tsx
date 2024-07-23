"use client"

import { determineLanguage } from "@/helpers/translations"
import styles from "@/scss/components/ContactForm.module.scss"
import { useState } from "react"
import Confetti from "react-confetti"

const ContactForm = (): React.JSX.Element => {
    const language = determineLanguage()

    const [error, setError] = useState<string | boolean>(false)
    const [success, setSuccess] = useState<string | boolean>(false)
    const [disableBtn, setDisableBtn] = useState<boolean>(false)

    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setDisableBtn(true)
        setError(false)
        setSuccess(false)

        const FORM_DATA = new FormData(e.target as HTMLFormElement)
        const name = FORM_DATA.get("name")
        const number = FORM_DATA.get("number")
        const email = FORM_DATA.get("email")
        const rodo = FORM_DATA.get("rodo")

        const request = await fetch("/api/mail/request-contact", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ name, number, email, rodo })
        })

        const response = await request.json()

        if (response.error) {
            setDisableBtn(false)
            setError(response.error)
            return
        }

        if (response.success) {
            setDisableBtn(false)
            setSuccess(response.success)
            return
        }
    }

    return (
        <section className={styles.contactForm}>
            <p className={styles.title}>{language === "pl" ? "Wypełnij Formularz" : "Fill The Form"}</p>
            <p className={styles.title2}>{language === "pl" ? "Odezwę się w 24 godziny" : "I will contact you within 24 hours"}</p>
            <form onSubmit={sendEmail}>
                <label htmlFor="name">{language === "pl" ? "Imię i Nazwisko" : "Your Name"}
                    <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="number">{language === "pl" ? "Numer Telefonu" : "Phone Number"}
                    <input type="tel" name="number" id="number" />
                </label>
                <label htmlFor="email">{language === "pl" ? "Adres Email" : "Email Address"}
                    <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="rodo">
                    <input type="checkbox" name="rodo" id="rodo" />{language === "pl" ? "Wyrażam zgodę na przetważanie moich danych osobowych w celu przedstawienia mi oferty." : "I consent to the processing of my personal data in order to present me with an offer."}

                </label>
                <button type="submit" disabled={disableBtn}>{language === "pl" ? "Proszę o kontakt" : "Order Contact"}</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
            {success &&
                <div className={styles.success}>
                    <Confetti
                        width={320}
                        height={400}
                        numberOfPieces={40}
                        gravity={0.07}
                    />
                    <p className={styles.text} dangerouslySetInnerHTML={{ __html: language === "pl" ? "Wiadomość wysłana poprawnie <br />Oczekuj kontaktu niebawem" : "Thank you for your message <br />I will contact you as soon as possible" }}></p>
                </div>
            }
        </section >
    )
}

export default ContactForm
