"use client";

import { Presentation, About, Skills, Projects, Contact } from "@/pages/Index";
import { Element } from 'react-scroll'

export default function Page() {
    return (
        <main>
            <Element name="home">
                <Presentation />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="skills">
                <Skills />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>

        </main>
    );
}