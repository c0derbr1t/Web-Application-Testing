import React, { useState } from 'react';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Player At Bat</h1>
      </header>
      <div className="display">
        <div className="strike-card">
          <div className="display-div">

          </div>
          <h3>STRIKES</h3>
        </div>
        <div className="ball-card">
        <div className="display-div">

        </div>
        <h3>BALLS</h3>
        </div>
      </div>
      <div className="dashboard">
        <button className="strike-btn">Strike</button>
        <button className="ball-btn">Ball</button>
        <button className="foul-btn">Foul</button>
        <button className="hit-btn">Hit</button>
      </div>
    </div>
  );
}

export default App;


// onClick for each button handled in a component