import { useState, useEffect } from "react";

function Hello() {
  function hiFn() {
    console.log("create :)");
    return byeFn;
  }
  function byeFn() {
    console.log("bye :(");
  }
  useEffect(hiFn, []);
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
    </div>
  );
}

export default App;
