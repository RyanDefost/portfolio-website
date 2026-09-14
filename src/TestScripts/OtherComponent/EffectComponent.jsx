import React, { useState, useEffect } from 'react'

function EffectComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Green");

    useEffect(() => {
        document.title = `Count:  ${count} ${color}`;
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

    function removeCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "Green" ? "Red" : "Green");
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={removeCount}>Remove</button> <br />

            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default EffectComponent;