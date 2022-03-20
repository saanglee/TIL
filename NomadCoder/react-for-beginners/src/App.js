import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // form태그 안의 button 누르면 submit 됨 (기본값) - 이거 막는 함수 onSubmit
    if(toDo==""){return} 
    setToDo(""); // 비워줌 
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="type"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
