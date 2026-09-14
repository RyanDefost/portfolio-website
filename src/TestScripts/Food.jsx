
function Food() {

    const food1 = "Ice Cream"
    const food2 = "Apple"

    return (
        <ul>
            <li>Bannana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food