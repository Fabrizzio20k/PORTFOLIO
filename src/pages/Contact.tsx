import { Section } from "@/components";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import styles from "@/styles/pages/Contact.module.css";

function Contact() {
    return (
        <Section color="#f5f5f5" flexDirection="column">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Contact</h1>
                <h3 className={styles.Text}>
                    Write me at any moment! I will be happy to answer you as soon as possible 🦎
                </h3>
                <div className={styles.Contacts}>
                    <div className={styles.Contact}>
                        <a href="https://maps.app.goo.gl/DVUF6EWjyw8hrRji7" target="_blank" rel="noopener noreferrer" className={styles.Link}>
                            <GrMapLocation />
                        </a>
                        <a href="https://maps.app.goo.gl/DVUF6EWjyw8hrRji7" target="_blank" rel="noopener noreferrer" className={styles.LinkTx}>
                            <h3 className={styles.LinkDescription}> Lima, Perú </h3>
                        </a>
                    </div>
                    <div className={styles.Contact}>
                        <a href="mailto:fabrizzio785@gmail.com" className={styles.Link}>
                            <MdOutlineMail />
                        </a>
                        <a href="mailto:fabrizzio785@gmail.com" className={styles.LinkTx}>
                            <h3 className={styles.LinkDescription}>fabrizzio785@gmail.com</h3>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export { Contact };