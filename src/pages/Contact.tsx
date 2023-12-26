import { Section } from "@/components";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import styles from "@/styles/pages/Contact.module.css";

function Contact() {
    return (
        <Section color="#f5f5f5" flexDirection="column">
            <div className={styles.Container}>
                <h1>Contact</h1>
                <h3>
                    Write me at any moment! I will be happy to answer you as soon as possible 🦎
                </h3>
                <div className={styles.Contacts}>
                    <div className={styles.Contact}>
                        <a href="https://maps.app.goo.gl/DVUF6EWjyw8hrRji7" target="_blank" rel="noopener noreferrer">
                            <GrMapLocation />
                        </a>
                        <h3> Lima, Perú </h3>
                    </div>
                    <div className={styles.Contact}>
                        <a href="mailto:fabrizzio785@gmail.com">
                            <MdOutlineMail />
                        </a>
                        <h3>fabrizzio785@gmail.com</h3>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export { Contact };