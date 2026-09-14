import styles from "./CounterComponent.module.css"
import React, { useState } from "react"

function CounterComponent() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 2)
    }

    const decrement = () => {
        setCount(c => c - 2)
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <div className={styles.counterContainer}>
                <p className={styles.counterDisplay}>{count}</p>

                <button className={styles.counterButton} onClick={() => decrement()}>Decrement</button>
                <button className={styles.counterButton} onClick={() => reset()}>Reset</button>
                <button className={styles.counterButton} onClick={() => increment()}>Increment</button>
            </div>
        </>
    )
}

export default CounterComponent