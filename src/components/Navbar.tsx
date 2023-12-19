"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div>
                <Link href={"/"} className={styles.noDecoration}>
                    <h1 className={styles.textLogo}>Fabrizzio.dev</h1>
                </Link>
            </div>
            <ul className={styles.navUL}>
                <li className={styles.menu}>
                    <Link href={"/"} className={`${styles.noDecoration} ${styles.links}`}> Home</Link>
                    <Link href={"/about"} className={`${styles.noDecoration} ${styles.links}`}> About</Link>
                    <Link href={"/projects"} className={`${styles.noDecoration} ${styles.links}`}> Projects</Link>
                    <Link href={"/contact"} className={`${styles.noDecoration} ${styles.links}`}> Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };