import { ReactElement } from "react";
import { IconType } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { MdOutlineOpenInNew, MdOutlineOpenInNewOff } from "react-icons/md";
import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";

interface CardProps {
    title: string;
    date: string;
    description: string;
    imageLink: string;
    linkCode: string;
    linkDemo?: string;
    isAvailable: boolean;
    technologies: ReactElement<IconType>[];
    align: "left" | "right";
}

function ProjectCard(props: CardProps) {
    return (
        <div className={styles.CardContainer}>
            <div className={styles.ImageContainer}>
                <Image
                    src={props.imageLink}
                    alt={props.title}
                    width={480}
                    height={270}
                    loading="lazy"
                    className={styles.Image}
                />
            </div>
            <div className={styles.Content}>
                <div className={styles.Titles}>
                    <h1 className={styles.Title}>{props.title}</h1>
                    <h2 className={styles.Year}>{props.date}</h2>
                </div>
                <div className={styles.Description}>
                    <p>{props.description}</p>
                </div>
                <div className={styles.Technologies}>
                    {props.technologies}
                </div>
                <div className={styles.Links}>
                    <a href={props.linkCode} target="_blank" rel="noopener noreferrer" className={styles.Link}>
                        <h3 className={styles.LinkDescriptor}>Code</h3>
                        <FiGithub className={styles.Icon} />
                    </a>
                    <a href={props.linkDemo} target="_blank" rel="noopener noreferrer" className={`${props.isAvailable ? styles.Link : styles.LinkDisable}`}>
                        <h3 className={styles.LinkDescriptor}>{props.isAvailable ? "Live demo" : "Not available"}</h3>
                        {props.isAvailable ? <MdOutlineOpenInNew className={styles.Icon} /> : <MdOutlineOpenInNewOff className={styles.Icon} />}
                    </a>
                </div>
            </div>
        </div>
    );
}


export { ProjectCard };