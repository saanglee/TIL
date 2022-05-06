import { useContext, useState, useEffect } from "react";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import List from "../components/List";

import { BookReviewStateContext } from "../App";

const Home = () => {
  // App.js 의 Context로 부터 더미데이터 공급받음
  const reviewList = useContext(BookReviewStateContext);
  console.log("Home: ", reviewList);
  const [review, setReview] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  // console.log("[Home] currentDate -> ", currentDate); // 현재시간 찍어보기
  // console.log("[Home] reviewList ->", reviewList);

  const headText = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월`;

  // TODO: 로직 이해하기..
  useEffect(() => {
    if (reviewList.length >= 1) {
      const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getTime();
      const lastDay = new Date( // 월 마지막 날
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getTime();
      console.log("last Day: ", new Date(lastDay));

      setReview(
        reviewList.filter(
          (item) => firstDay <= item.date && item.date <= lastDay
        )
      );
    }
  }, [reviewList, currentDate]);

  const increaseMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    );
  };

  const decreaseMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        currentDate.getDate()
      )
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text="<" onClick={decreaseMonth} />}
        rightChild={<MyButton text=">" onClick={increaseMonth} />}
      />
      <List reviewList={review} />
    </div>
  );
};

export default Home;
