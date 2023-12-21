"use client";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { routes } from "@/components/routes";
import styles from "@/styles/Navbar.module.css";
import { Turn as Hamburger } from 'hamburger-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth > 800 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", checkWindowSize);

        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, [isOpen]);

    const [size, setSize] = useState(32); // Tamaño inicial del icono

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setSize(window.innerWidth / 12);
            } else {
                setSize(32);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Llama a la función al montar el componente

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <Link href={"/"} className={styles.linkLogo}>
                <h1 className={styles.textLogo}>&lt;Fabrizzio.dev /&gt;</h1>
            </Link>
            <ul className={styles.navUL}>
                <li className={styles.hamburguer}>
                    <Hamburger rounded={true} toggled={isOpen} toggle={setIsOpen} size={size} />
                </li>
                {isOpen && (<div className={styles.fullScreenMenu}>
                    {routes.map((route, index) => (
                        <Link href={route.path} key={index} className={`${styles.links} ${styles.linkMobile}`} onClick={() => setIsOpen(false)}>
                            {route.name}
                        </Link>
                    ))}
                </div>)}
                <li className={styles.menu}>
                    {routes.map((route, index) => (
                        <Link href={route.path} key={index} className={`${styles.links}`}>
                            {route.name}
                        </Link>
                    ))}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };