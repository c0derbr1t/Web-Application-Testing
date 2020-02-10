import React, { useState } from 'react';

import { addOne } from './utils/addOne';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  if (strikes > 2) {
    setStrikes(0);
  }

  if (balls > 3) {
    setBalls(0);
  }

  


  return (
    <div className="App">
      <header>
        <h1>Player At Bat</h1>
      </header>
      <main>
      <div className="display">
        <div className="strike-card">
          <div className="display-div">
            <h2>{strikes}</h2>
          </div>
          <h3>STRIKES</h3>
        </div>
        <div className="ball-card">
        <div className="display-div">
          <h2>{balls}</h2>
        </div>
        <h3>BALLS</h3>
        </div>
      </div>
      <div className="dashboard">
        <button className="strike-btn" onClick={() => setStrikes(addOne(strikes))}>Strike</button>
        <button className="ball-btn" onClick={() => setBalls(addOne(balls))}>Ball</button>
        <button className="foul-btn" onClick={() => (strikes < 2) ? setStrikes(addOne(strikes)) : setStrikes(2)}>Foul</button>
        <button className="hit-btn" onClick={() => {
          setStrikes(0);
          setBalls(0);
        }}>Hit</button>
      </div>
      </main>
    </div>
  );
}

export default App;


// onClick for each button handled in a component