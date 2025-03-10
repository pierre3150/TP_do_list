import { createElement } from "react"
import app from "./app.module.css"
import "./style.css"


function App() {
    let firstname = "John";
    return (
        <>
            <div class="container">
                <h1 className = {app['textGreen']}>ToDo Liste</h1>
                <div class="input-section">
                    <button id="addTask">Ajouter</button>
                </div>
                <div class="filter-section">
                    <button data-filter="all" class="filter-btn">Toutes</button>
                    <button data-filter="completed" class="filter-btn">Terminées</button>
                    <button data-filter="pending" class="filter-btn">En cours</button>
                </div>
                <div>
                    <input type = "checkbox"></input>
                    <p>nom de la task</p>
                    <button><i class="fa-solid fa-check"></i></button>

                </div>
            </div>
        </>
    )
}
export default App