import { Section } from "@/components";
import styles from "@/styles/pages/Projects.module.css"

function Projects() {
    return (
        <Section color="white" flexDirection="column">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Projects</h1>
            </div>
        </Section>
    );
}

export { Projects };