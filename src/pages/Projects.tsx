import { Section, ProjectCard } from "@/components";
import { FaHtml5, FaReact, FaVuejs, FaNodeJs, FaPython, FaCrow, FaAws, FaDocker, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiCplusplus, SiPostgresql, SiFlask } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import styles from "@/styles/pages/Projects.module.css";

const projects = [
    {
        title: "Project 1",
        date: "2021",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.",
        imageLink: "/about.jpg",
        linkCode: "https://pixabay.com/images/search/background/",
        linkDemo: "https://pixabay.com/images/search/background/",
        isAvailable: true,
        align: "left",
        technologies: [
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <RiJavascriptFill key="javascript" />,
            <SiNextdotjs key="nextjs" />
        ],
    },
    {
        title: "Project 2",
        date: "2022",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatuma.",
        imageLink: "/about.jpg",
        linkCode: "https://github.com",
        isAvailable: false,
        align: "right",
        technologies: [
            <FaNodeJs key="nodejs" />,
            <SiExpress key="express" />,
            <SiPostgresql key="postgresql" />,
            <SiCplusplus key="cplusplus" />,
        ],
    },
];

function Projects() {
    return (
        <Section color="white" flexDirection="column">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Projects</h1>
                <div className={styles.ProjectsContainer}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                            imageLink={project.imageLink}
                            linkCode={project.linkCode}
                            linkDemo={project.linkDemo}
                            isAvailable={project.isAvailable}
                            align={project.align as "left" | "right"}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export { Projects };