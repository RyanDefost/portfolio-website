import styles from "./ProjectBasePage.module.css"

function ProjectBasePage() {

    return (
        <div className={styles.projectBasePage}>
            <div className={styles.pageHead}>
                <h2>ProjectName</h2>
                <div className={styles.headInfo}>
                    <div className={styles.pageHeadContent}>
                        <img src="portfolio-website/src/assets/GamePreview.png" alt="" />
                    </div>
                    <div className={styles.pageHeadContent}>
                        <h3>Project Info</h3>
                        <div className={styles.infoPannel}>
                            <p>Duration: {"10 weeks"}
                                <br /> Team size: 6 people</p>

                            <p>Tools: Unity / Trello / Miro
                                <br /> Language: C#</p>

                            <p>Roll: programmer  <br />/ concept design</p>
                            <p>Github [Local Terrarium]
                                <br /> Itch [itch.io/LocalTerrarium]</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.imageContent}>
                <img src="portfolio-website/src/assets/GamePreview.png" alt="" />
                <img src="portfolio-website/src/assets/GamePreview.png" alt="" />
                <p>TiouhfsEPFIu iuHV  iusghIud  iusd i iuhiusdf u uisufhisdf </p>
            </div>

            <div >
                <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.
                    <br /><br />
                    Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five cen</p>
            </div>

        </div>
    );
}

export default ProjectBasePage;