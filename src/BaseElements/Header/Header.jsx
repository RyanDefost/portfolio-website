import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

function HeaderBase() {
    return (
        <div className={styles.headerBase}>
            <div className={styles.container}>
                <img className={styles.profile}
                    src="../src/assets/FoGyXtFaEAAtODP.png" alt="fox_profile"
                />

                <NavLink to="/">R//dF</NavLink>
            </div>
            <div className={styles.center}>
                <h className={styles.mainText}>A place for me to share what I find interesting.</h>
            </div>
            <div className={styles.container}></div>

        </div>
    );
}

export default HeaderBase;