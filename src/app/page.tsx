"use client";

import Presentation from '@/pages/Presentation';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
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