import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Copyright}>
                    <h3 className={styles.Text}>
                        Copyright &copy; 2023. Made with ❤ using <SiNextdotjs />
                    </h3>
                </div>
                <div className={styles.Social}>
                    <Link href={"https://www.instagram.com/its_fabrizzio_ve/?hl=es"} className={styles.MediaIcons} target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/fabrizzio20k/"} className={styles.MediaIcons} target="_blank">
                        <AiOutlineLinkedin />
                    </Link>
                    <Link href={"https://github.com/Fabrizzio20k"} className={styles.MediaIcons} target="_blank">
                        <FiGithub />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export { Footer };