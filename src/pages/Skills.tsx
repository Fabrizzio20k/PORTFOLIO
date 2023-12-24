import { Section } from "@/components";
import { FaHtml5, FaCss3, FaReact, FaVuejs, FaNodeJs, FaPython, FaCrow, FaAws, FaDocker, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiCplusplus, SiPostgresql, SiMongodb, SiFlask } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import styles from "@/styles/pages/Skills.module.css";

function Skills() {
    return (
        <Section color="#f5f5f5" flexDirection="row">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Skills</h1>
                <div className={styles.SkillsContainer}>
                    <div className={styles.Skill}>
                        <h2 className={styles.SkillTitle}>Frontend</h2>
                        <div className={styles.SkillIcons}>
                            <div className={styles.SkillIcon}>
                                <FaHtml5 style={
                                    {
                                        color: "#e34f26",
                                    }
                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <FaCss3Alt style={
                                    {
                                        color: "#264de4",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <RiJavascriptFill style={
                                    {
                                        color: "#f0db4f",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <BiLogoTypescript style={
                                    {
                                        color: "#007acc",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <FaReact style={
                                    {
                                        color: "#61dafb",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <FaVuejs style={
                                    {
                                        color: "#4fc08d",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <SiNextdotjs style={
                                    {
                                        color: "#000000",
                                    }
                                } />
                            </div>
                        </div>
                    </div>
                    <div className={styles.Skill}>
                        <h2 className={styles.SkillTitle}>Backend</h2>
                        <div className={styles.SkillIcons}>
                            <div className={styles.SkillIcon}>
                                <FaNodeJs style={
                                    {
                                        color: "#68a063",
                                    }
                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <SiExpress style={
                                    {
                                        color: "#000000",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <FaPython style={
                                    {
                                        color: "#3776ab",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <SiFlask style={
                                    {
                                        color: "#000000",
                                    }
                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <SiCplusplus style={
                                    {
                                        color: "#00599c",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <FaCrow style={
                                    {
                                        color: "#000000",
                                    }

                                } />
                            </div>
                        </div>
                    </div>
                    <div className={styles.Skill}>
                        <h2 className={styles.SkillTitle}>Database</h2>
                        <div className={styles.SkillIcons}>
                            <div className={styles.SkillIcon}>
                                <SiPostgresql style={
                                    {
                                        color: "#336791",
                                    }
                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <SiMongodb style={
                                    {
                                        color: "#4db33d",
                                    }
                                } />
                            </div>
                        </div>
                    </div>
                    <div className={styles.Skill}>
                        <h2 className={styles.SkillTitle}>Others</h2>
                        <div className={styles.SkillIcons}>
                            <div className={styles.SkillIcon}>
                                <FaAws style={
                                    {
                                        color: "#232f3e",
                                    }

                                } />
                            </div>
                            <div className={styles.SkillIcon}>
                                <FcLinux />
                            </div>
                            <div className={styles.SkillIcon}>
                                <FaDocker style={
                                    {
                                        color: "#0db7ed",
                                    }
                                } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section >
    );
}

export { Skills };