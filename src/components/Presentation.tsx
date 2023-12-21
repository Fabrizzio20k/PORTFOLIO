import styles from "@/styles/Presentation.module.css";

function Presentation() {
    return (
        <div className={styles.mainPresentation}>
            <div className={styles.column1}>
                <h3>Hi, I&apos;m Fabrizzio Vilchez, just a passionated fullstack developer from Lima, Perú 🇵🇪 </h3>
            </div>
            <div className={styles.column2}>
                <p>Espacio para imagen</p>
            </div>
        </div>
    )
}

export { Presentation };