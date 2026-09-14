import styles from "./MenuPannel.module.css"
import MenuButtons from "../MenuButtons/MenuButtons";
import MenuContent from "../MenuContent/MenuContent";

function MenuPannel() {

    return (
        <div className={styles.MenuPannel}>
            <MenuButtons />
            <MenuContent />
        </div>
    );
}

export default MenuPannel;