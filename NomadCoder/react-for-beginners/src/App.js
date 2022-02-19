import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setVale] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setVale((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    //console.log("CALL THE API...");
    console.log("I run only once");
  }, []);
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes");
  }, [keyword, counter]);

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search for..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
