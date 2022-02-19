import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setVale] = useState(0);
  const onClick = () => setVale((prev) => prev + 1);
  console.log("i run all the time");

  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
