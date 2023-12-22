import styles from "@/styles/Section.module.css"

interface SectionProps {
    children: React.ReactNode;
    color: string;
    flexDirection?: "row" | "column";
}

function Section(props: SectionProps) {
    return (
        <div
            style={{
                backgroundColor: props.color,
                flexDirection: props.flexDirection ?? "column"
            }}
            className={styles.Section}>
            {props.children}
        </div>
    );
}

export { Section };