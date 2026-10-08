import styles from "./ProjectButton.module.css"
import { NavLink, useSearchParams } from "react-router-dom";

function ProjectButton({ name, infoText }) {

    let rehf = `/projects?project=${name}`;
    let buttonState = styles.inactive;

    const [searchParams, setSearchParams] = useSearchParams();
    let location = searchParams.get("project")
    if (location == name) {
        buttonState = styles.active;
    }

    return (
        <div>
            <button className={`${styles.projectButton} ${buttonState}`}>
                <NavLink to={rehf}>
                    {name}<br /></NavLink>
                <h className={styles.infoText}>{infoText}</h>
            </button>
        </div>
    );
}

export default ProjectButton;