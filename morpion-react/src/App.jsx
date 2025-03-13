import "./app.css"
import { useState, useEffect } from "react";
import Compteur from "../composents/Compteur";

function App() {
  const [namePlayer, setNamePlayer] = useState([]);
  const [tour, setTour] = useState(0)
  const [casem, setCasem] = useState(Array(9).fill(null))

  useEffect(() => {
    console.log(namePlayer);
  }, [namePlayer]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setNamePlayer([{ id: formData.get("namep1"), point: 0 }, { id: formData.get("namep2"), point: 0 }]);
  };

  const reinitialisé = () => {
    setCasem(Array(9).fill(null)), setNamePlayer([]), setTour(0)
  };

  const handleClick = (index) => {
    if (casem[index] !== null) return;

    const newCasem = [...casem];
    if (tour % 2 === 1) {
      newCasem[index] = "X"
    } else {
      newCasem[index] = "O"
    }
    setCasem(newCasem);

    setTour(tour + 1);
  };


  return (
    <>
      <div>
        <h1>Bienvenue sur mon morpion</h1>
        <p>Entrez vos noms</p>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="namep1" placeholder="Joueur 1" required />
          <input type="text" name="namep2" placeholder="Joueur 2" required />
          <button type="submit">Commencer</button>
        </form>
        {namePlayer.length > 0 && (
          <p>
            Joueur 1: {namePlayer[0].id} point: {namePlayer[0].point} | Joueur 2: {namePlayer[1].id} point: {namePlayer[1].point}
          </p>
        )}
      </div>

      <div>
        <h2>
          Au tour du joueur {tour % 2 + 1}
        </h2>
        <Compteur />
      </div>
      
      {namePlayer.length > 0 && (
      <div className="grid">
        {casem.map((value, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {value}
          </div>
        ))}
      </div>
      )}
      <div>
        <button onClick={() => setCasem(Array(9).fill(null))}>Rejouez</button>
        <button onClick={reinitialisé}>Réinitialisé</button>
      </div>
    </>
  );
}

export default App;
