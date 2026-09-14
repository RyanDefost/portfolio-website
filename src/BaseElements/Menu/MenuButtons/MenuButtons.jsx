import { Route, Routes, href, NavLink, useSearchParams } from "react-router-dom";
import styles from "./MenuButtons.module.css"

function MenuButtons() {


    switch (window.location.pathname) {
        case "/projects":
            return (
                <div className={styles.menuButtons}>
                    <button className={styles.menuButton}><NavLink to="/">Main</NavLink></button>
                    <button className={`${styles.menuButton} ${styles.active}`}><NavLink to="/projects">Projects</NavLink></button>
                    <button className={styles.menuButton}><NavLink to="/about">About</NavLink></button>
                </div >
            );
        case "/about":
            return (
                <div className={styles.menuButtons}>
                    <button className={styles.menuButton}><NavLink to="/">Main</NavLink></button>
                    <button className={styles.menuButton}><NavLink to="/projects">Projects</NavLink></button>
                    <button className={`${styles.active} ${styles.menuButton}`}><NavLink to="/about">About</NavLink></button>
                </div >
            );
        case "/":
            return (
                <div className={styles.menuButtons}>
                    <button className={`${styles.menuButton} ${styles.active}`}><NavLink to="/">Main</NavLink></button>
                    <button className={styles.menuButton}><NavLink to="/projects">Projects</NavLink></button>
                    <button className={styles.menuButton}><NavLink to="/about">About</NavLink></button>
                </div >
            );

    }
}

export default MenuButtons;