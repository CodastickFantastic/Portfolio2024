import styles from "@/scss/components/ContactInfo.module.scss";

import Image from "next/image";

import phone from "@/../public/img/icons/phone.png";
import at from "@/../public/img/icons/at.png";
import linkedIn from "@/../public/img/icons/linkedIn.png";
import fb from "@/../public/img/icons/fb.png";

const ContactInfo = (): React.JSX.Element => {

    return (
        <section className={styles.contactInfo}>
            <p className={styles.title}>Odezwij się</p>
            <a href="tel:+48501721417" className={styles.contactTile}>
                <Image src={phone} alt="Ikona telefonu" />
                <p className={styles.contactTileText}>+48 501 721 417</p>
            </a>
            <div className={styles.row}>
                <a href="https://www.facebook.com/JakubMagikWojtysiak/" className={styles.contactTile} target="_blank">
                    <Image src={fb} alt="Ikona Facebooka" />
                </a>
                <a href="https://www.linkedin.com/in/jakub-wojtysiak-6a16912b0/" className={styles.contactTile} target="_blank">
                    <Image src={linkedIn} alt="Ikona LinkedIn" />
                </a>
            </div>
            <a href="mailto:it.jakub.wojtysiak@gmail.com" className={styles.contactTile}>
                <Image src={at} alt="Ikona maila" />
                <p className={styles.contactTileText}>it.jakub.wojtysiak@gmail.com</p>
            </a>

        </section>
    )
};

export default ContactInfo;