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

  const openCell = (index: number) => {
    console.log(index)
    setCells(prev => prev.map((cell, i) => {
      if (index === i) {
        return {
          ...cell,
          hasItem: true,
        };
      }

      return cell;
    }))
  };

  return (
    <div className="App">
      <div className="Board">
        {cells.map((cell, index) =>(
          <div
            key={index}
            className="Cell"
            onClick={() => openCell(index)}
          >
          </div>
        ))}
      </div>

      <div className="Counter">Tries: {tries}</div>
      <div className="Controls">
        <button type="button">Reset</button>
      </div>
    </div>
  );
}

export default App;
