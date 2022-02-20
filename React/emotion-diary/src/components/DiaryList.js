import { useState } from "react";
import { useNavigate } from "react-router";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";
// 시간순 정렬 필터 : 최신순, 오래된 순
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" }, // name들이 옵션으로 나타난다. 선택 시 value값 - state에 저장 됨
];

// 감정 정렬 필터
const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" }, // name들이 옵션으로 나타난다.
];

// value 옵션(필터) 값, onChange 필터를 바꾸는 함수
// optionList.. ???? onChange이벤트 발생 시 이벤트객체의 타겟의 value를 전달, onChange의 메서드인 setSortType호출 - 오래된순 선택하면 oldest, 최신순 선택하면 latest
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="ControlMenu"
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

// =============================================================

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("lastest");

  // 감정필터의 상태를 저장할 state
  const [filter, setFilter] = useState("all");

  //getprocessedDiaryList라는 함수는 if 문으로 분기를 달아서 정렬된 리스트를 반환하는 역할을 한다.
  const getprocessedDiaryList = () => {
    // 필터링 함수 생성
    const filterCallBack = (item) => {
      if (item === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    // 비교함수
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    // 정렬 기능
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_cal">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_cal">
          <MyButton
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getprocessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
