import styles from "./UserGreeting.module.css"

function UserGreeting({ isLoggedIn = false, username = "USER" }) {

    const welcomeMessage = <h2 className={styles.welcomeMessage}>Welcome {username}</h2>
    const loginMessage = <h2 className={styles.loginPrompt}>Please login</h2>

    return (isLoggedIn ? welcomeMessage : loginMessage)
}

export default UserGreeting