import { useState } from "react";
import Key from "./components/key";

export default function CalculateIt()
{
  const [displayText, setDisplayText] = useState("");

  function addToScreen(value)
  {
    if (displayText.toLowerCase() === "error")  clearScreen();
    setDisplayText(prevText => prevText + value);
  }

  function deleteCharacter()
  {
    setDisplayText(prevText => prevText.substring(0, prevText.length - 1));
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
    <Key value='*' text='x' handleClick={addToScreen} />,
    <Key value='1' handleClick={addToScreen} />,
    <Key value='2' handleClick={addToScreen} />,
    <Key value='3' handleClick={addToScreen} />,
    <Key value='/' handleClick={addToScreen} />,
    <Key value='.' handleClick={addToScreen} />,
    <Key value='0' handleClick={addToScreen} />,
    <Key value="" text='del' handleClick={deleteCharacter} />,
    <Key value='C' handleClick={clearScreen} />,
    <Key value='(' handleClick={addToScreen} />,
    <Key value=')' handleClick={addToScreen} />,
    <Key value="" text='=' handleClick={computeAndUpdateScreen} />,
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