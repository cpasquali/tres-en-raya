export const Square = ({ onSquareClick, value, className }) => {
  return (
    <article onClick={onSquareClick} className={`square ${className}`}>
      {value}
    </article>
  );
};
