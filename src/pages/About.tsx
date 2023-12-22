import { Section } from "@/components";
import Image from "next/image";
import styles from "@/styles/About.module.css";

function About() {
    return (
        <Section color="white" flexDirection="row">
            <div className={styles.RowsAbout}>
                <div className={styles.Row1}>
                    <Image
                        src="/about.jpg"
                        alt="About Me"
                        width={480}
                        height={270}
                        className={styles.Image}
                    />
                </div>
                <div className={styles.Row2}>
                    <h1 className={styles.Title}>About Me</h1>
                    <p className={styles.Text}>
                        I&apos;m a Passionate junior web developer with a strong background in Computer Science and a proactive
                        approach to problem-solving. I excel in Python, C++, and JavaScript, along with proficiency
                        in utilizing frameworks on both the front-end and back-end. Additionally, I am a self-taught
                        programmer always eager to learn something new, continuously striving to develop optimal and
                        high-quality solutions in line with current standards. Also, I am a team player with excellent
                        communication skills and a strong work ethic.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export { About };

