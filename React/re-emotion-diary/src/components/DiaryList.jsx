import React, { useState } from "react";
import { useNavigate } from "react-router";
import MyButton from "./MyButton";
// filter 1
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

// filter 2
const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  // 정렬기준 상태값
  const [sortType, setSortType] = useState("latest"); // 초기값 최신순
  // filter 2
  const [filter, setFilter] = useState("all");

  // 최신순, 오래된 순에 따라 일기 리스트 정렬 바뀌도록 구현
  // if 문으로 분기를 달아서 정렬된 리스트를 반환
  const getProcessedDiaryList = () => {
    // 감정 필터 - 필터링 조건 함수: 좋은 감정만, 안좋은 감정만
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

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

    // 감정 필터 - 필터링 조건 필요: filterCallBack에 it전달 시 true를 반환하는 값만 filtering
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu // filter 1
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />

          <ControlMenu // filter 2
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {/* getProcessedDiaryList함수의 결과값을 렌더링 */}
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>
          {it.content} {it.emotion}
        </div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
