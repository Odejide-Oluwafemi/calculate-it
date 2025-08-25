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

  const keyValues = [
    '+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/',
    '.', '0', 'del', 'c', '(', ')', '='
  ];

  const k = keyValues.map(keyValue => {
    const text = 
      keyValue === '*' ? "X"
      :
      keyValue === 'c' ? "C"
      :
      null;
    
    const handleClick = () => {
      ((keyValue.toLowerCase() === 'del') ? deleteCharacter()
      :
      (keyValue.toLowerCase() === '=') ? computeAndUpdateScreen()
      :
      (keyValue.toLowerCase() === 'c') ? clearScreen()
      :
      addToScreen(keyValue));
    }

    return(
      <Key
        key={keyValue}
        value={keyValue}
        text={text}
        handleClick={handleClick}
      />
    );
  });

  // const keys = [
  //   <Key key='+' value='+' handleClick={addToScreen} />,
  //   <Key key='7' value='7' handleClick={addToScreen} />,
  //   <Key key='8' value='8' handleClick={addToScreen} />,
  //   <Key key='9' value='9' handleClick={addToScreen} />,
  //   <Key key='8' value='-' handleClick={addToScreen} />,
  //   <Key key='8' value='4' handleClick={addToScreen} />,
  //   <Key key='8' value='5' handleClick={addToScreen} />,
  //   <Key key='8' value='6' handleClick={addToScreen} />,
  //   <Key key='8' value='*' text='x' handleClick={addToScreen} />,
  //   <Key key='8' value='1' handleClick={addToScreen} />,
  //   <Key key='8' value='2' handleClick={addToScreen} />,
  //   <Key key='8' value='3' handleClick={addToScreen} />,
  //   <Key key='8' value='/' handleClick={addToScreen} />,
  //   <Key key='8' value='.' handleClick={addToScreen} />,
  //   <Key key='8' value='0' handleClick={addToScreen} />,
  //   <Key key='8' value="del" handleClick={deleteCharacter} />,
  //   <Key key='8' value='C' handleClick={clearScreen} />,
  //   <Key key='8' value='(' handleClick={addToScreen} />,
  //   <Key key='8' value=')' handleClick={addToScreen} />,
  //   <Key key='8' value="=" handleClick={computeAndUpdateScreen} />,
  // ];

  return(
    <main>
      <div id="calculator-container">
        <input id="calculator-screen" type="text" value={displayText} readOnly/>
        
        <div id="keypad-container">
          {k}
        </div>
      </div>
    </main>
  );
}