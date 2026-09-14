import styles from "./ToDoList.module.css"
import React, { useState } from 'react'


function ToDoList() {
    const [tasks, setTasks] = useState(["Eat stuff", "Walk dog", "Other stuff"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(e) {
        setNewTasks(e.target.value)
    }

    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);

            setNewTasks("");
        }
    }

    function handleRemoveTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)

        setTasks(updatedTasks);
    }

    function handleMoveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    function handleMoveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    return (
        <div className={styles.toDoList}>
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder='Enter a Task...'
                    value={newTask}
                    onChange={handleInputChange} />

                <button
                    className={styles.addButton}
                    onClick={handleAddTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, i) =>
                    <li key={i}>
                        <span className={styles.text}>{task}</span>
                        <button
                            className={styles.deleteButton}
                            onClick={() => handleRemoveTask(i)}>
                            Delete
                        </button>

                        <button
                            className={styles.moveButton}
                            onClick={() => handleMoveTaskUp(i)}>
                            Up
                        </button>

                        <button
                            className={styles.moveButton}
                            onClick={() => handleMoveTaskDown(i)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList