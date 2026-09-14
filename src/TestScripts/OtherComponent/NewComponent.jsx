import { useState } from "react";

function NewComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Bannana"]);

    function handleAddFood(e) {
        let inputField = document.getElementById("foodInput");

        const newFood = inputField.value;
        inputField.value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        let inputField = document.getElementById("foodInput");
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add</button>
        </div>
    );
}

export default NewComponent