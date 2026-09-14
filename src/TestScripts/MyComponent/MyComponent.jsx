
import React, { useState } from "react"

// function MyComponent() {

//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);

//     const updateName = () => { setName("Spongebob"); }
//     const updateAge = () => { setAge(age + 1); }
//     const ToggleEmployment = () => { setIsEmployed(!isEmployed); }


//     return (
//         <>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>

//             <p>Age: {age}</p>
//             <button onClick={updateAge}>Set Age</button>

//             <p>Employment: {isEmployed ? "Yes" : "No"}</p>
//             <button onClick={ToggleEmployment}>Set Employment</button>
//         </>
//     );
// }

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [command, setCommand] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommandChange(e) {
        setCommand(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (
        <>
            <div>
                <input value={name} onChange={handleNameChange} />
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number" />
                <p>Quantiy: {quantity}</p>

                <textarea value={command} onChange={handleCommandChange}
                    placeholder="Enter instructions" />
                <p>Comment: {command}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select Option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">GiftCard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange} />
                    Pickup
                </label><br />
                <label>
                    <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange} />
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </>
    );
}

export default MyComponent