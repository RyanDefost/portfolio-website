import styles from "./Card.module.css"
import profilePic from "../assets/Profile.png"

function Card({ name = "Name", descr = "Default discr." }) {
    return (
        <div className={styles.card}>
            <img src={profilePic} alt="not a duck igs" />

            <h2>{name}</h2>
            <p>{descr}</p>
        </div>
    );
}

export default Card