import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [i, setI] = useState(0);

  const onClickHandle = () => {
    setI(i + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h3>Use Memo</h3>
      <h2>i: {i}</h2>
      <button onClick={onClickHandle}>Increment I</button>
      </header>
    </div>
  );
}

export default App;
