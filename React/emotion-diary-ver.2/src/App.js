// import "./App.css";
// TODO: 더미데이터를 API로 가져와서 넣어보기 (simple diayr 참고)
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useReducer, useRef } from "react";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import { dummyData } from "./dummyData";

export const BookReviewStateContext = React.createContext();
export const BookReviewDispatchContext = React.createContext();

const dummy = { dummyData };
console.log(dummy);

// Reducer 함수
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      // INIT? ?
      return action.review;
    }
    case "CREATE": {
      newState = [...action.review, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.targetId); // targetId가 삭제할 리뷰Id
      break;
    }
    case "EDIT": {
      newState = state.map((item) =>
        item.id === action.review.id ? { ...action.review } : item
      );
      break;
    }

    default:
      return state;
  }
  return newState;
};

function App() {
  const [review, dispatch] = useReducer(reducer, dummy);
  const reviewId = useRef(0);

  const onCreate = (title, author, content, date, rating) => {
    dispatch({
      type: "CREATE",
      review: {
        id: reviewId.current,
        date: new Date(review).getTime(),
        title,
        author,
        content,
        rating,
      },
    });
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", id: targetId });
  };

  const onEdit = (targetId, title, author, content, date, rating) => {
    dispatch({
      type: "EDIT",
      id: targetId,
      date: new Date(date).getTime(),
      title,
      author,
      content,
      rating,
    });
  };

  return (
    <BookReviewStateContext.Provider value={review}>
      {/* useContext로 리뷰데이터와 Dispatch 함수 공급 -> 다른 컴포넌트들로 */}
      <BookReviewDispatchContext.Provider
        value={{
          onCreate,
          onRemove,
          onEdit,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit:id" element={<Edit />} />
            <Route path="/diary:id" element={<Diary />} />
          </Routes>
        </BrowserRouter>
      </BookReviewDispatchContext.Provider>
    </BookReviewStateContext.Provider>
  );
}

export default App;
