"use client";
import "@/styles/global.css"
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { routes } from "@/components/routes";
import styles from "@/styles/Navbar.module.css";
import { Turn as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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

    const [size, setSize] = useState(32);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setSize(window.innerWidth / 12);
            } else {
                setSize(32);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

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
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={styles.fullScreenMenu}
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100vw' }}
                            transition={{ type: 'tween', duration: 0.4 }}
                        >
                            {routes.map((route, index) => (
                                <Link href={route.path} key={index} className={`${styles.links} ${styles.linkMobile}`} onClick={(e: any) => {
                                    e.preventDefault();
                                    setIsOpen(false);
                                    if (route.path) {
                                        scroller.scrollTo(route.path.substring(2), {
                                            duration: 1000,
                                            delay: 0,
                                            smooth: 'easeInOutQuart',
                                            offset: -80,
                                        });
                                    }
                                }}>
                                    {route.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
                <li className={styles.menu}>
                    {routes.map((route, index) => (
                        <Link href={route.path} key={index} className={styles.links} onClick={(e: any) => {
                            e.preventDefault();
                            window.location.hash = route.path.substring(2);
                            if (route.path) {
                                scroller.scrollTo(route.path.substring(2), {
                                    duration: 800,
                                    delay: 0,
                                    smooth: 'easeInOutQuart',
                                    offset: -80,
                                });
                            }

                        }}>
                            {route.name}
                        </Link>
                    ))}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };