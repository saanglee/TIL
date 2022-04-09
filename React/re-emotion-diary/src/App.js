import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useReducer, useRef } from "react";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
// import RouteTest from "./components/RouteTest";
// import Reducer from "./Reducer";

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

// 일기 데이터 공급할 Context
export const DiaryStateContext = React.createContext();
// dispatch함수(data state를 변경할 수 있는 함수임)를 공급할 Contetx
export const DiaryDispatchContext = React.createContext();

// 현재 밀리세컨즈 가져오기
// console.log(new Date().getTime());

const dummyData = [
  { id: 1, emotion: 1, content: "오늘의 일기 1번", date: 1648979868340 },
  { id: 2, emotion: 3, content: "오늘의 일기 2번", date: 1648979868341 },
  { id: 3, emotion: 4, content: "오늘의 일기 3번", date: 1648979868342 },
  { id: 4, emotion: 5, content: "오늘의 일기 4번", date: 1648979868343 },
  { id: 5, emotion: 2, content: "오늘의 일기 5번", date: 1648979868344 }, // 가장 최근 item
  { id: 6, emotion: 2, content: "오늘의 일기 6번", date: 1658979868344 },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData); //dummyData를 data state의 초기값으로 넣는다

  const dataId = useRef(0);

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

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", id: targetId });
  };
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    // 일기데이터를 관리하는 data state의 값을 value로 공급함
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
              {/* <Route path="/reducer" element={<Reducer />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
