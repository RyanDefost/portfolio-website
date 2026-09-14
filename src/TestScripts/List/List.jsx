import styles from "./List.module.css"

//   const fruits = [
//     { id: 0, name: "apple", calories: 95 },
//     { id: 1, name: "Orange", calories: 45 },
//     { id: 2, name: "Bannana", calories: 105 },
//     { id: 3, name: "Coconut", calories: 159 },
//     { id: 4, name: "pineapple", calories: 37 }
//   ];

//   const vegetables = [
//     { id: 6, name: "Potatoes", calories: 110 },
//     { id: 7, name: "Celery", calories: 15 },
//     { id: 8, name: "Carrots", calories: 25 },
//     { id: 9, name: "Corn", calories: 63 },
//     { id: 10, name: "Broccoli", calories: 50 }
//   ];

//      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
//      {vegetables.length > 0 && <List items={vegetables} category="vegetables" />}

function List({ items = [], category = "DEFAULT NAME" }) {

    const itemList = items
    const categoryList = category

    const listItems = itemList.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b>
        </li>
    );

    return (
        <>
            <h3 className={styles.listCategory}>{categoryList}</h3>
            <ol className={styles.listItems}>{listItems}</ol>
        </>
    );
}

export default List