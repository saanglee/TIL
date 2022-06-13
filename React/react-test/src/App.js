import "./App.css";
import { useState, memo } from "react";
import Memoization from "./Memoization";
import MemoizationObj from "./MemoizationObj";

function Swatch({ color }) {
  // console.log(`Swatch rendered with ${color}`);
  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
    ></div>
  );
}
// memo is high order function, it creates components
// give it a component and it wraps the component and creates another component in this case
const MemoedSwatch = memo(Swatch);

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  // console.log(`App Renderd ${appRenderIndex}`);

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          click me
        </button>
      </div>
      <div>
        {/* <Swatch color="red" /> */}
        <MemoedSwatch color="red" />
      </div>
      <Memoization />
      <MemoizationObj />
    </div>
  );
}

export default App;
