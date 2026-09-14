import styles from "./MainPage.module.css"

function MainPage() {

    return (
        <div className={styles.profile}>
            <img className={styles.profileImage} src="../src/assets/FoGyXtFaEAAtODP.png" alt="fox_profile" />
            <div>
                <h1>Ryan de Fost</h1>
                <h2>System & Game programmer</h2>
            </div>
        </div>
    );
}

export default MainPage;