import { Route, Routes, href, NavLink, useSearchParams } from "react-router-dom";
import styles from "./MenuContent.module.css"

function MenuContent({ content }) {
    const [searchParams, setSearchParams] = useSearchParams();
    let test = searchParams.get("project")

    console.log(test)


    return (
        <div className={styles.menuContent}>
            <h className={styles.headerText}>Projects</h>
            <button id="1" className={styles.projectButton}>
                <NavLink to="/projects?project=Crafted_Connections">
                    Crafted Connections<br /></NavLink>
            </button>

            <button id="2" className={styles.projectButton}>
                <NavLink to="/projects?project=Wave_Function_Collapse">
                    Wave Function Collapse<br /></NavLink>
            </button>

            <button id="3" className={styles.projectButton}>
                <NavLink to="/projects?project=Examen_MA">
                    Examen MA<br /></NavLink>
            </button>

            <button id="4" className={styles.projectButton}>
                <NavLink to="/projects?project=Examen_MA">
                    Examen MA<br /></NavLink>
            </button>

            <button id="5" className={styles.projectButton}>
                <NavLink to="/projects?project=Examen_MA">
                    Examen MA<br /></NavLink>
            </button>

            <button id="6" className={styles.projectButton}>
                <NavLink to="/projects?project=Examen_MA">
                    Examen MA<br /></NavLink>
            </button>

            <button id="0" className={styles.archivesButton}>
                <NavLink to="/projects">
                    Archives...<br /></NavLink>
            </button>
        </div >
    );
}

export default MenuContent;