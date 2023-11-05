import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
	if(counter<20)
    	setCounter(counter + 1);
  };

  const decreaseValue = () => {
    if (counter > 0) 
		setCounter(counter - 1);
  };

  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrement</button>
    </>
  );
}

export default App;

