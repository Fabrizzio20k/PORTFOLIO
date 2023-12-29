"use client";

import modules from '@/pages/Index';
import { Element } from 'react-scroll'

export default function Page() {
    return (
        <main>
            <Element name="home">
                <modules.Presentation />
            </Element>
            <Element name="about">
                <modules.About />
            </Element>
            <Element name="skills">
                <modules.Skills />
            </Element>
            <Element name="projects">
                <modules.Projects />
            </Element>
            <Element name="contact">
                <modules.Contact />
            </Element>

        </main>
    );
}