import { useEffect } from "react";
import { Square } from "./Square";
import { usePlayer } from "../hooks/usePlayer";
import { playWinner } from "../utils/playWinner";

export const Board = ({ board, setBoard, winner, setWinner }) => {
  const { player, setPlayer } = usePlayer();

  const handleSquareClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || winner) return;
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  };

  const handleWinner = (board) => {
    for (const [a, b, c] of playWinner) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (board.every((cell) => cell !== null)) {
      setWinner("draw");
    }
  };

  useEffect(() => {
    handleWinner(board);
  }, [board]);

  return (
    <section className="board">
      {board.map((_, index) => (
        <Square
          key={index}
          onSquareClick={() => handleSquareClick(index)}
          value={board[index]}
          className={board[index]}
        />
      ))}
    </section>
  );
};
