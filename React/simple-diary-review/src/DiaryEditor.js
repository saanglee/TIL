import { useRef, useState } from "react";

const DiaryEditor = () => {
  // 1. useRef객체 생성
  const aouthorInput = useRef();
  const contentInput = useRef();

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

  // 3. 저장버튼 누를 시 if조건에서 포커스 실행되도록 함
  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      aouthorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    console.log(state);
    alert("저장성공!");
  };

  // 2. 각 태그에 ref객체 매핑
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        {/* author */}
        <input
          ref={aouthorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        {/* content */}
        <textarea
          ref={contentInput}
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
