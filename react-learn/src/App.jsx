import { useState } from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "../componant/Button";
import Compteur from "../componant/Compteur";
import TaskItem from "../componant/TaskItem";
import PseudoForm from "../componant/PseudoForm"

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const toggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        const newText = prompt("Modifier la tâche :", tasks[index].text);
        if (newText) {
            const updatedTasks = [...tasks];
            updatedTasks[index].text = newText;
            setTasks(updatedTasks);
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });

    return (
        <div className="container">
            <h1>ToDo Liste</h1>
            <PseudoForm />
            <Compteur />
            <br></br>
            <div className="input-section">
                <input
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nouvelle tâche..."
                />
                <Button onClick={addTask} name="Ajouter" />
            </div>

            <div className="filter-section">
                <Button onClick={() => setFilter("all")} name="Tout" className="filter-btn" />
                <Button onClick={() => setFilter("completed")} name="Terminées" className="filter-btn" />
                <Button onClick={() => setFilter("pending")} name="En cours" className="filter-btn" />
            </div>

            <ul className="task-list">
                {filteredTasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        task={task}
                        index={index}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;