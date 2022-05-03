import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext); // App.js에서 더미데이터 공급받기

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // curDate변경 시 diaryList에서 해당 년,월에 속하는 일기 데이터들만 가져오기
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const lastDaty = new Date(
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

  // 데이터 확인
  useEffect(() => {
    console.log(data);
  }, [data]);

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
      <DiaryList diaryList={data}></DiaryList>
    </div>
  );
};

export default Home;
