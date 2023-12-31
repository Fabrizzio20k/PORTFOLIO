"use client";

import styles from "@/styles/pages/Presentation.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import Typewriter from 'typewriter-effect';
import { Section } from "../components/Section";
export default function Presentation() {
    return (
        <Section color="#f5f5f5" flexDirection="column">
            <div className={styles.columnsPresentation}>
                <div className={styles.column1}>
                    <h1 className={styles.textPresentation}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Frontend')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('Backend')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('Full Stack Developer here 👋')
                                    .pauseFor(30000)
                                    .start();
                            }}
                            options={{
                                loop: true,
                            }}
                        />
                    </h1>
                    <h3 className={styles.paragraphPresentation}>Hi, I&apos;m Fabrizzio Vilchez, just a passionated Full Stack Developer from Lima, Perú 🇵🇪 </h3>
                    <div className={styles.socialMedia}>
                        <Link href={"https://www.instagram.com/its_fabrizzio_ve/?hl=es"} className={styles.mediaIcons} target="_blank">
                            <FaInstagram />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/fabrizzio20k/"} className={styles.mediaIcons} target="_blank">
                            <AiOutlineLinkedin />
                        </Link>
                        <Link href={"https://github.com/Fabrizzio20k"} className={styles.mediaIcons} target="_blank">
                            <FiGithub />
                        </Link>
                    </div>
                </div>
                <div className={styles.column2}>
                    <div className={styles.container}>
                        <div className={styles.shape}></div>
                    </div>
                </div>
            </div>
        </Section>
    )
}