import { useState } from "react";

const DiaryEditor = () => {
  // state합치기
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        {/* author */}
        <input
          name="state"
          value={state.author}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(e.target.name);
            setState({
              ...state,
              author: e.target.value,
            });
          }}
        />
      </div>
      <div>
        {/* content */}
        <textarea
          name="content"
          value={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <span>오늘의 감정 점수</span>
        <select>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <buttno>일기 저장하기</buttno>
      </div>
    </div>
  );
};

export default DiaryEditor;
