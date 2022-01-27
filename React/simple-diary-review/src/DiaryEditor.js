import { useState } from "react";

const DiaryEditor = () => {
  // state합치기
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // onChange이벤트 함수
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요.");
      return;
    }
    if (state.content.length < 5) {
      alert("일기 내용은 최소 5글자 이상 입력해주세요.");
      return;
    }

    console.log(state);
    alert("저장성공!");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        {/* author */}
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        {/* content */}
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정 점수</span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
