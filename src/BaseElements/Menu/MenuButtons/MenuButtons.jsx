import { Route, Routes, href, NavLink, useSearchParams } from "react-router-dom";
import styles from "./MenuButtons.module.css"
import { act } from "react";

function MenuButtons() {


    console.log(window.location.hash)

    let mainState, projectState, aboutState = styles.inactive

    switch (window.location.hash) {
        case "#/projects":
            projectState = styles.active
            break;
        case "#/about":
            aboutState = styles.active
            break;
        case "#/":
            mainState = styles.active
            break;

    }

    return (
        <div className={styles.menuButtons}>
            <button className={`${styles.menuButton} ${mainState}`}><NavLink to="/">Main</NavLink></button>
            <button className={`${styles.menuButton} ${projectState}`}><NavLink to="/projects">Projects</NavLink></button>
            <button className={`${styles.menuButton} ${aboutState}`}><NavLink to="/about">About</NavLink></button>
        </div >
    );
}

export default MenuButtons;