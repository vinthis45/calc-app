import React, { useState } from "react";
import "./App.css"; // You can create a Calculator.css file for styling

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="calculator-display">
          <input
            type="text"
            value={input}
            readOnly
            className="input-field"
          />

          <div className="result">
            Result: {result}
          </div>


        </div>
        <div className="button-grid">
          <div className="row">
            <button onClick={handleClear} className="clear-btn">
              C
            </button>
            <button onClick={() => handleButtonClick("/")} className="operator-btn">
              /
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("*")} className="operator-btn">
              *
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("-")} className="operator-btn">
              -
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("+")} className="operator-btn">
              +
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("0")} className="zero-btn">
              0
            </button>
            <button onClick={() => handleButtonClick(".")} className="dot-btn">
              .
            </button>
            <button onClick={handleCalculate} className="equals-btn">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
