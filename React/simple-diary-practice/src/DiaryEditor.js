import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "", // 초기값
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state, // <-- 이건 왜 필요할까? 아  나머지는 바뀌면 안되니까
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // 버튼
    console.log(state);
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    console.log(state);
    alert("저장 성공😫");

    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기😘</h2>
      <div>
        <input
          ref={authorInput} // ref 객체 전달 - authorInput ref객체를 통해 input태그에 접근 가능하게 됨
          name="author"
          value={state.author}
          onChange={handleChangeState}
          type="text"
          placeholder="작성자"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          type="text"
          placeholder="내용"
        />
      </div>
      <div>
        <span>오늘의 감정 점수 : </span>
        <select name="emotion" value={state.emotion}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
