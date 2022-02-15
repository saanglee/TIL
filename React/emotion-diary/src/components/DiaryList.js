import { useState } from "react";
// 3. 시간순 정렬 : 최신순, 오래된 순
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  // 5. 옵션 리스트.. ???? onChange이벤트 발생 시 이벤트객체의 타겟의 value를 전달, onChange의 메서드인 setSortType호출 - 오래된순 선택하면 oldest, 최신순 선택하면 latest
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

// =============================================================

const DiaryList = ({ diaryList }) => {
  // 1. 정렬 기준 저장할 State생성 - 초기값 '최신순'이라는 뜻의 latest
  // ControlMenu의 역할 : sorType정렬 기준을 변화시키는 select의 역할
  const [sortType, setSortType] = useState("lastest");

  return (
    <div>
      {/* 2. value, onChange 전달 | 4. optionLst전달*/}
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
