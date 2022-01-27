import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={author}
          onChange={(e) => {
            // 이벤트객체의 target의 value = author가 변화해야 하는 값
            // 아직 input에 아무것도 써지지 않고 console에만 찍힘
            console.log(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea />
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
