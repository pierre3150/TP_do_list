import { useState, useEffect } from "react";

function Compteur() {
    const [count, setCount] = useState(0);
    const [minus, setMinus] = useState(1);
    const [plus, setPlus] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => {
                return currentCount + 1
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <p>Compteur : {count}</p>
            <div>
                <button onClick={() => setCount(count + plus)}>+ {plus}</button>
                <button onClick={() => setCount(count - minus)}>- {minus}</button>
                <button onClick={() => (setCount(0), setMinus(1), setPlus(1))}>Réinitialisé</button>
            </div>
            <div>
                <label>Valeur initiale</label>
                <input onChange={(e) => setCount(Number(e.target.value))}></input>
            </div>
            <div>
                <label>Valeur Incrémentation</label>
                <input onChange={(e) => setPlus(Number(e.target.value))}></input>
                <label>Valeur Décrémentation</label>
                <input onChange={(e) => setMinus(Number(e.target.value))}></input>
            </div>
        </div>
    );
}
export default Compteur; 