export const Square = ({ onSquareClick, value, className, index }) => {
  return (
    <article onClick={onSquareClick} className={`square ${className}`}>
      {value}
      {!value && <span className="key">{index + 1}</span>}
    </article>
  );
};
