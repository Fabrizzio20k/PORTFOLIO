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

    return (
        <main>
            <nav className={styles.navbar}>
                <div>
                    <Link href={"/"} className={styles.noDecoration}>
                        <h1 className={styles.textLogo}>Fabrizzio.dev</h1>
                    </Link>
                </div>
                <ul className={styles.navUL}>
                    <li className={styles.hamburguer}>
                        <Hamburger rounded toggled={isOpen} toggle={setIsOpen} />
                    </li>
                    <li className={styles.menu}>
                        {routes.map((route, index) => (
                            <Link href={route.path} key={index} className={`${styles.noDecoration} ${styles.links}`}>
                                {route.name}
                            </Link>
                        ))}
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export { Navbar };