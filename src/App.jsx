import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { usePlayer } from "./hooks/usePlayer";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(false);
  const { player } = usePlayer();

  const handleResetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(false);
  };

  return (
    <div className="app">
      <h2>TRES EN RAYA</h2>
      <Board
        board={board}
        setBoard={setBoard}
        winner={winner}
        setWinner={setWinner}
      />
      {winner && (
        <p className="status-info">
          {winner && winner !== "draw" ? (
            <span>
              Ganador: <span className={winner}>{winner}</span>
            </span>
          ) : (
            winner === "draw" && <span>Empate</span>
          )}
        </p>
      )}
      {winner && (
        <button className="reset-btn" onClick={handleResetBoard}>
          Reiniciar tablero
        </button>
      )}
      <section className="player-container">
        <p className={`status-info player ${player === "X" && "active X"}`}>
          X
        </p>
        <p className={`status-info player ${player === "O" && "active O"}`}>
          O
        </p>
      </section>
    </div>
  );
}

export default App;
