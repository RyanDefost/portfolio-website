import styles from "./ProjectsPage.module.css"

function ProjectsPage() {

    return (
        <div>
            <h1>Archives</h1>

            <div className={styles.projects}>
                <div className={styles.grid}>

                    <div className={styles.projectBox}></div>
                    <div className={styles.projectBox}></div>
                    <div className={styles.projectBox}></div>
                    <div className={styles.projectBox}></div>
                    <div className={styles.projectBox}></div>
                    <div className={styles.projectBox}></div>
                    <div className={styles.projectBox}></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;