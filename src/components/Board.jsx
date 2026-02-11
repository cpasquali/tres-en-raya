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
    const handleButtonPress = (e) => {
      if (
        e.key !== "1" &&
        e.key !== "2" &&
        e.key !== "3" &&
        e.key !== "4" &&
        e.key !== "5" &&
        e.key !== "6" &&
        e.key !== "7" &&
        e.key !== "8" &&
        e.key !== "9"
      )
        return;

      const index = Number(e.key) - 1;
      const newBoard = [...board];
      if (newBoard[index] || winner) return;
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
    };

    window.addEventListener("keydown", handleButtonPress);

    return () => window.removeEventListener("keydown", handleButtonPress);
  });

  useEffect(() => {
    handleWinner(board);
  }, [board]);

  return (
    <section className="board">
      {board.map((_, index) => (
        <Square
          key={index}
          index={index}
          onSquareClick={() => handleSquareClick(index)}
          value={board[index]}
          className={board[index]}
        />
      ))}
    </section>
  );
};
