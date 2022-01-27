import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={author}
          onChange={(e) => {
            console.log(e.target.value); // target의 값 = input에 입력되는 텍스트
            console.log(e.target.name); // target의 이름
            setAuthor(e.target.value); // author상태 변화시킴
          }}
        />
      </div>
      <div>
        {/* content */}
        <textarea
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
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
