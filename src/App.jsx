import { useState } from "react";
import Key from "./components/key";

export default function CalculateIt()
{
  const [displayText, setDisplayText] = useState("1+2+");

  function addToScreen(value)
  {
    if (displayText.toLowerCase() === "error")  clearScreen();
    setDisplayText(prevText => prevText + value);
  }

  function clearScreen()
  {
    setDisplayText("");
  }

  function computeAndUpdateScreen()
  {
    let result;
    try
    {
      result = eval(displayText);
    }
    catch(error)
    {
      result = "Error";
    }

    clearScreen();
    addToScreen(result);
  }

  const keys = [
    <Key value='+' handleClick={addToScreen} />,
    <Key value='7' handleClick={addToScreen} />,
    <Key value='8' handleClick={addToScreen} />,
    <Key value='9' handleClick={addToScreen} />,
    <Key value='-' handleClick={addToScreen} />,
    <Key value='4' handleClick={addToScreen} />,
    <Key value='5' handleClick={addToScreen} />,
    <Key value='6' handleClick={addToScreen} />,
    <Key value='*' handleClick={addToScreen} />,
    <Key value='1' handleClick={addToScreen} />,
    <Key value='2' handleClick={addToScreen} />,
    <Key value='3' handleClick={addToScreen} />,
    <Key value='/' handleClick={addToScreen} />,
    <Key value='0' handleClick={addToScreen} />,
    <Key value='.' handleClick={addToScreen} />,
    <Key value='=' handleClick={computeAndUpdateScreen} />,
    <Key value='C' handleClick={clearScreen} />,
  ];

  return(
    <main>
      <div id="calculator-container">
        <input id="calculator-screen" type="text" value={displayText} readOnly/>
        
        <div id="keypad-container">
          {keys}
        </div>
      </div>
    </main>
  );
}