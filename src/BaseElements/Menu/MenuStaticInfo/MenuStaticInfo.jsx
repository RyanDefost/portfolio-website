import styles from "./MenuStaticInfo.module.css"

function MenuStaticInfo({ pannelContent }) {
    return (
        <div className={styles.MenuStaticInfo}>
            <h1>Info ▾ </h1>
            <ul>
                <li> One </li>
                <li> Two </li>
                <li> Three </li>
            </ul>

            <h1>Socials ▾</h1> <ul>
                <li> One </li>
                <li> Two </li>
                <li> Three </li>
            </ul>
        </div>

    );
}

export default MenuStaticInfo;