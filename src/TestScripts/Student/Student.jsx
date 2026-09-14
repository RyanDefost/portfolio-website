import styles from "./Student.module.css"

function Student({ name = "NAME", age = 0, isStudent = false }) {

    return (
        <div className={styles.student}>
            <p>Name:    {name}</p>
            <p>Age:     {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student