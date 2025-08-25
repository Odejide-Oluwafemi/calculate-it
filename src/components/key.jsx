export default function Key({value, handleClick, text})
{
  text = (text === null || text === '') ? value : text;
  const operators = ['+', '-', '*', '/', 'c'];

  return(
    <button
      className={`key-btn ${operators.includes(value.toLowerCase()) ? "operator-key" : "number-key"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}