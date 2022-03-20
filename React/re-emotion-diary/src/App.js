import { useReducer } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import RouteTest from "./components/RouteTest";

import Reducer from "./Reducer";

const reducer = (state, action) => {
  return state;
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/reducer" element={<Reducer />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
