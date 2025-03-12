import { createElement } from "react";
import app from "./app.module.css";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from '../componant/Button';
import ButtonModif from '../componant/ButtonModif';
import ButtonSup from '../componant/ButtonSup';
import Checkbox from '../componant/Checkbox';

import Compteur from "../componant/Compteur";




function App() {
    let firstname = "John";
    return (
        <>
            <div className="container">
                <h1 className={app['textGreen']}>ToDo Liste</h1>
                <Compteur />
                <div className="input-section">
                    <Button nameBoutton="Ajouter" />
                </div>
                <div className="filter-section">
                    <Button data-filter="all" nameBoutton="Toutes"/>
                    <Button data-filter="completed" nameBoutton="Terminées"/>
                    <Button data-filter="pending" nameBoutton="en cours"/>
                </div>
                <div className="list-task">
                    <div className="element-list">
                        <Checkbox />
                        <p>nom de la task</p>
                    </div>
                    <div className="element-list">
                        <ButtonModif />
                        <ButtonSup />
                    </div>
                </div>
            </div>
        </>
    )
}
export default App