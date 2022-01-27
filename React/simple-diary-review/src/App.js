import "./App.css";
// import React, { useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "Sang",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "Mina",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "Alicia",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
