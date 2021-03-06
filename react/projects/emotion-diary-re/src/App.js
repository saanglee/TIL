import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useReducer, useRef } from "react";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = { ...action.data };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  { id: 1, emotion: 1, content: "오늘의 일기 1번", date: 1644737154504 },
  { id: 2, emotion: 3, content: "오늘의 일기 2번", date: 1644737154505 },
  { id: 3, emotion: 4, content: "오늘의 일기 3번", date: 1644737154506 },
  { id: 4, emotion: 5, content: "오늘의 일기 4번", date: 1644737154507 },
  { id: 5, emotion: 2, content: "오늘의 일기 5번", date: 1644737154508 },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  console.log(new Date().getTime());
  const dataId = useRef(0);
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", id: targetId });
  };
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      id: targetId,
      date: new Date(date).getTime(),
      content,
      emotion,
    });
  };
  return (
    <DiaryStateContext.Provider value={data}>
      {/* value = 일기 데이터 */}
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onRemove,
          onEdit,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
