import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    // 컴포넌트 없어질 때 실행 됨
    return () => console.log("destroyed :(");
  }, []);
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
