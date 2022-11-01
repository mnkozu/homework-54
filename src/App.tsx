import React, {useState} from 'react';
import './App.css';

function App() {
  const createItems = () => {
    const initialState = [];

    for (let i = 0; i < 36; i++) {
      initialState.push({hasItem: false, clicked: false})
    }

    const randomIndex = Math.floor(Math.random() * 36);

    initialState[randomIndex].hasItem = true;

    return initialState;
  };

  const [cells, setCells] = useState(createItems());
  const [tries, setTries] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  const openCell = (index: number) => {
    if (cells[index].clicked || isFinish) return;

    setCells(prev => prev.map((cell, i) => {
      if (index === i) {
        return {
          ...cell,
          clicked: true,
        };
      }

      return cell;
    }));

    setTries(prev => prev + 1);

    if (cells[index].hasItem) {
      setIsFinish(true);
    }
  };

  const reset = () => {
    setCells(createItems());
    setTries(0);
    setIsFinish(false);
  };

  return (
    <div className="App">
      <div className="Board">
        {cells.map((cell, index) =>(
          <div
            key={index}
            onClick={() => openCell(index)}
            className={cell.clicked ? "Cell Open" : "Cell"}
          >
            {cell.clicked && cell.hasItem && 0}
          </div>
        ))}
      </div>

      <div className="Counter">
        <p>Tries: {tries}</p>
        <p>{isFinish && "Good Job!"}</p>
      </div>
      <div className="Controls">
        <button type="button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
