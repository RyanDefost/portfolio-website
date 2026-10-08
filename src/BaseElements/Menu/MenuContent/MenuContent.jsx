import { Route, Routes, href, NavLink, useSearchParams } from "react-router-dom";
import styles from "./MenuContent.module.css"
import ProjectButton from "../../ProjectButton/ProjectButton";

function MenuContent({ content }) {
    const [searchParams, setSearchParams] = useSearchParams();
    let test = searchParams.get("project")

    console.log(test)


    return (
        <div className={styles.menuContent}>
            <h className={styles.headerText}>Projects</h>

            <ProjectButton name={"Wave Function Collapse"} infoText={"Unity, CS | 2026"} />
            <ProjectButton name={"Crafted Connections"} infoText={"Unity, CS | 2025"} />
            <ProjectButton name={"Game of Life"} infoText={"C++ | 2025"} />
            <ProjectButton name={"Empire Falls"} infoText={"Unity, CS | 2024"} />
            <ProjectButton name={"Potion Party"} infoText={"Unreal, C++ | 2023"} />

            <button id="0" className={styles.archivesButton}>
                <NavLink to="/projects">
                    Archives...<br /></NavLink>
            </button>
        </div >
    );
}

export default MenuContent;