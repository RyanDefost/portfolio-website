import styles from "./MenuPannel.module.css"

import MenuButtons from "../MenuButtons/MenuButtons";
import MenuContent from "../MenuContent/MenuContent";

function MenuPannel({ pannelContent }) {
    return (
        <div className={styles.MenuPannel}>
            <MenuButtons />
            {pannelContent}
        </div>

    );
}

export default MenuPannel;