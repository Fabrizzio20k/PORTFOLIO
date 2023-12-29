import { Section, ProjectCard } from "@/components";
import { FaHtml5, FaReact, FaVuejs, FaNodeJs, FaPython, FaCrow, FaAws, FaDocker, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiCplusplus, SiPostgresql, SiFlask, SiE } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import styles from "@/styles/pages/Projects.module.css";

const projects = [
    {
        title: "CloudText Magic ✨",
        date: "November, 2023",
        description: "A simple web application that allows you to extract text from any image, with a simple and intuitive interface, using AWS serverless services such as S3, Lambda, API Gateway, DynamoDB, Textract and CloudFront.",
        imageLink: "/CloudText.png",
        linkCode: "https://github.com/Fabrizzio20k/Project_Cloud_Computing_2",
        isAvailable: false,
        align: "right",
        technologies: [
            <FaPython key="python" style={
                {
                    color: "#3776ab",
                }

            } />,
            <FaReact key="react" style={
                {
                    color: "#61dafb",
                }

            } />,
            <SiNextdotjs key="nextjs" style={
                {
                    color: "#000000",
                }

            } />,
            <FaAws key="aws" style={
                {
                    color: "#232f3e",
                }
            } />
        ],
    },
    {
        title: "HyperLogLog Simulator 🚀",
        date: "November, 2023",
        description: "A simulator for the HyperLogLog algorithm, which is used to estimate the cardinality of a set, and show the results in many different ways in comparison to the real cardinality and other estimators.",
        imageLink: "/Hyperloglog.png",
        linkCode: "https://github.com/Fabrizzio20k/HyperLogLog_Cpp/tree/main",
        isAvailable: false,
        align: "left",
        technologies: [
            <SiCplusplus key="cplusplus" style={
                {
                    color: "#00599c",
                }

            } />,
            <FaNodeJs key="nodejs" style={
                {
                    color: "#68a063",
                }
            } />,
            <SiExpress key="express" style={
                {
                    color: "#000000",
                }
            } />,

            <FaReact key="react" style={
                {
                    color: "#61dafb",
                }

            } />,
            <SiNextdotjs key="nextjs" style={
                {
                    color: "#000000",
                }

            } />,
        ],
    },
    {
        title: "Pathfinder Maze 🧩",
        date: "November, 2023",
        description: "A graphic implementation of some pathfinding algorithms, such as Dijkstra, A*, Greedy BFS, and its variations depending of the way the distance is calculated, and a maze generator, using C++ and Raylib.",
        imageLink: "/Pathfinding.jpg",
        linkCode: "https://github.com/Fabrizzio20k/Pathfinder-maze",
        linkDemo: "",
        isAvailable: false,
        align: "left",
        technologies: [
            <SiCplusplus key="cplusplus" style={
                {
                    color: "#00599c",
                }

            } />,
        ],
    },
    {
        title: "GPT-Games 🎮",
        date: "October, 2023",
        description: "A web application that allows you to buy and sell video games. You can register, login, add games to your cart, and buy them. It also has a search bar to find games by name, and a filter to sort them.",
        imageLink: "/GPTGames.png",
        linkCode: "https://github.com/Fabrizzio20k/GPT-GAMES-STORE",
        isAvailable: false,
        align: "right",
        technologies: [
            <FaPython key="python" style={
                {
                    color: "#3776ab",
                }

            } />,
            <SiFlask key="flask" style={
                {
                    color: "#000000",
                }

            } />,
            <FaVuejs key="vuejs" style={
                {
                    color: "#4fc08d",
                }

            } />,
            <SiPostgresql key="postgresql" style={
                {
                    color: "#336791",
                }
            } />,
            <FaDocker key="docker" style={
                {
                    color: "#2496ed",
                }
            } />,
            <FaAws key="aws" style={
                {
                    color: "#232f3e",
                }
            } />
        ],
    },
];

export default function Projects() {
    return (
        <Section color="white" flexDirection="column">
            <div className={styles.Container}>
                <div className={styles.TitleContainer}>
                    <h1 className={styles.Title}>Projects</h1>
                </div>
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