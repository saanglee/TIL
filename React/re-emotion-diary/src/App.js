import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import RouteTest from "./components/RouteTest";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
