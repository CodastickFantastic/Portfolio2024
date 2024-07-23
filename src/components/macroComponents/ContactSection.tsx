"use client"

import styles from "@/scss/components/ContactSection.module.scss"
import ContactInfo from "../microComponents/ContactInfo"
import ContactForm from "../microComponents/ContactForm"
import { determineLanguage } from "@/helpers/translations"


const ContactSection = (): React.JSX.Element => {
    const language = determineLanguage()

    return (
        <section className={styles.contactSection}>
            <h2>{language === "pl" ? "Kontakt" : "Contact"}</h2>
            <p dangerouslySetInnerHTML={{ __html: language === "pl" ? 'Skontaktujmy sie już <span class="purple">dziś</span>' : `Let's contact <span class="purple">today</span>` }} />
            <div className={styles.row}>
                <ContactInfo />
                <p className={styles.dividerText}>{language === "pl" ? "lub" : "or"}</p>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactSection