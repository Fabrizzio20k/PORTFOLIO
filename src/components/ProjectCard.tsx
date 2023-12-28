import { ReactElement } from "react";
import { IconType } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { FaRegFaceDizzy } from "react-icons/fa6";
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
            <div className={`${styles.ImageContainer} ${props.align === "left" ? "" : styles.first}`}>
                <Image
                    src={props.imageLink}
                    alt={props.title}
                    width={480}
                    height={270}
                    loading="lazy"
                    className={styles.Image}
                />
            </div>
            <div className={`${styles.Content} ${props.align === "left" ? styles.Mleft : styles.Mright}`}>
                <div>
                    <h1>{props.title}</h1>
                    <h2>{props.date}</h2>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    {props.technologies}
                </div>
                <div>
                    <div>
                        <h3>Code</h3>
                        <a href={props.linkCode} target="_blank" rel="noopener noreferrer">
                            <FiGithub />
                        </a>
                    </div>
                    <div>
                        <h3>Live demo {props.isAvailable ? "" : "not available now"}</h3>
                        <a href={props.linkDemo} target="_blank" rel="noopener noreferrer">
                            {props.isAvailable ? <IoOpenOutline /> : <FaRegFaceDizzy />}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export { ProjectCard };