import React, { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  // 정렬기준 상태값
  const [sortType, setSortType] = useState("latest"); // 초기값 최신순

  // 최신순, 오래된 순에 따라 일기 리스트 정렬 바뀌도록 구현
  // if 문으로 분기를 달아서 정렬된 리스트를 반환
  const getProcessedDiaryList = () => {
    // 최신순, 오래된 순 비교 함수 compare
    // 문자열이 들어올 경우 대비 parseInt
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    // 배열에 sort를 쓰면 원본배열이 정렬이 된다 - 그래서 배열을 '깊은 복사'를 해서 사용
    // stringify: diaryList배열을 'JSON화'함 문자열로 바꿔줌 -> parse: 다시 배열로 바꿔줌
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {/* getProcessedDiaryList함수의 결과값을 렌더링 */}
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
