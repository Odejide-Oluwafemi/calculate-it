export default function Key({value, handleClick, text=value})
{
  const operators = ['+', '-', '*', '/', 'c'];
  console.log(operators.includes(value.toLowerCase()))

  return(
    <button
      className={`key-btn ${operators.includes(value.toLowerCase()) ? "operator-key" : "number-key"}`}
      onClick={() => handleClick(value)}
    >
      {text}
    </button>
  );
}