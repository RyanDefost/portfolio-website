import styles from "./ContentPage.module.css"
import MenuPannel from "../Menu/MenuPannel/MenuPannel";

function ContentPage({ content }) {

    return (
        <div className={styles.base}>
            <MenuPannel />

            <div className={styles.ContentPage}>
                <div className={styles.profile}>
                    <div> {content} </div>
                </div>
            </div >
        </div>
    );
}

export default ContentPage;