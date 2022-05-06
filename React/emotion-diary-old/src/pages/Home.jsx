import React, { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";

// 헤더에 나타날 날짜 저장 state를 만듦 - 기본값 현재시간

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // curDate변경 시 diaryList에서 해당 년,월에 속하는 일기 데이터들만 가져오기
  useEffect(() => {
    // diaryList가 비어을 경우 아래 코드를 수행하지 않는다.
    if (diaryList.length >= 1) {
      const firstDay = new Date( // 월 첫 날
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const lastDay = new Date( // 월 마지막 날
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();
      console.log("lastDay : ", new Date(lastDaty));

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDaty)
      );
    }
    // console.log(diaryList);
  }, [diaryList, curDate]);
  // dirayList 변경 시에도 useEffect가 동작 해야 함 (= 일기 추가 수정 삭제 시)

  // 해당 월의 데이터만 나오는 지 useEffect사용하여 콘솔에 찍어보기
  useEffect(() => {
    console.log(data);
  }, [data]);

  // 헤더 월 증가(오른쪽 버튼), 감소(왼쪽 버튼)시키는 함수
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
