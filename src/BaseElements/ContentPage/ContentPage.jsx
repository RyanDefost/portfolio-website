import styles from "./ContentPage.module.css"
import MenuPannel from "../Menu/MenuPannel/MenuPannel";

function ContentPage({ content, pannelContent }) {

    return (
        <div className={styles.base}>
            <MenuPannel pannelContent={pannelContent} />

            <div className={styles.ContentPage}>
                {content}
            </div >
        </div>
    );
}

export default ContentPage;