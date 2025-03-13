import React from "react";
import Checkbox from "./Checkbox";

function TaskItem({ task, index, toggleComplete, editTask, deleteTask }) {
    return (
        <li className="task-item">
            <Checkbox checked={task.completed} onChange={() => toggleComplete(index)} />
            <span className={`task-text ${task.completed ? "completed" : ""}`}>
                {task.text}
            </span>
            <div className="actions">
                <button onClick={() => toggleComplete(index)} className="complete-btn">
                    <i className="fa-solid fa-check"></i>
                </button>
                <button onClick={() => editTask(index)} className="edit-btn">
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button onClick={() => deleteTask(index)} className="delete-btn">
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    );
}

export default TaskItem;
