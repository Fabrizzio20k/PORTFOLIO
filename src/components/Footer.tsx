"use client";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const getDateTime = async () => {
            const { data } = await axios.get("https://worldtimeapi.org/api/timezone/America/Bogota");
            const date = new Date(data.datetime);
            setDate(date.getFullYear().toString());
        };
        getDateTime();
    }, []);
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Copyright}>
                    <h3 className={styles.Text}>
                        Copyright &copy; {date === "" ? '2023' : date}. Made with ❤ using <SiNextdotjs style={
                            {
                                verticalAlign: 'middle'
                            }
                        } />
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