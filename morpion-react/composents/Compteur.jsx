import { useState, useEffect } from "react";

function Compteur() {
    const [count, setCount] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => {
                return currentCount - 1
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    if (count <= 0) {
        return (
            <div>
                <p>Vous n'avez plus de temps la main passe a l'adversert</p>
                <button onClick={() => (setCount(5))}>Passez la main a l'adverser</button>
            </div >
        );

    };
    return (
        <div>
            <p>temps restant : {count}</p>
        </div>
    );
}
export default Compteur; 