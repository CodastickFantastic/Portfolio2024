import styles from "@/scss/components/ContactSection.module.scss"
import ContactInfo from "../microComponents/ContactInfo"
import ContactForm from "../microComponents/ContactForm"


const ContactSection = (): React.JSX.Element => {

    return (
        <section className={styles.contactSection}>
            <h2>Kontakt</h2>
            <p>Skontaktujmy sie już <span className="purple">dziś</span></p>
            <div className={styles.row}>
                <ContactInfo />
                <p className={styles.dividerText}>lub</p>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactSection