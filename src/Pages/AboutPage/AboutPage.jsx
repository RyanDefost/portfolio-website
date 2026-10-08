import styles from "./AboutPage.module.css"

function AboutPage() {

    return (
        <div className={styles.aboutPage}>

            <div className={styles.pageHead}>
                <img src="portfolio-website/src/assets/FoGyXtFaEAAtODP.png" alt="" />
                <h1>Ryan<br />
                    de Fost</h1>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.infoBody}>
                <div className={styles.textBody}>
                    <h2>A bit about me</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.
                        <br /><br />
                        Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five cen</p>
                </div>

                <div className={styles.imageBody}>
                    <img src="portfolio-website/src/assets/film-noir-movies-4171751256.jpg" alt="" />
                    <img src="portfolio-website/src/assets/GamePreview.png" alt="" />
                    <img src="portfolio-website/src/assets/OIP-3074997733.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;