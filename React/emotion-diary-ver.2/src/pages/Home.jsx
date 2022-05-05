import { useContext, useState, useEffect } from "react";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import List from "../components/List";

import { BookReviewStateContext } from "../App";

const Home = () => {
  const reviewList = useContext(BookReviewStateContext); // App.js 의 Context로 부터 더미데이터 공급받음

  const [review, setReview] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  // console.log("[Home] currentDate -> ", currentDate); // 현재시간 찍어보기
  // console.log("[Home] reviewList ->", reviewList);

  const headText = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월`;

  // TODO: curDate변경할 때마다 reviewList에서 해당 년,월의 리뷰 데이터들만 가져오기
  useEffect(() => {
    setReview(reviewList);
  }, []);
  console.log("[Home] review state ->", review);

  // TODO: increaseMonth 함수 생성 - setCurrentDate 이용
  const increaseMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    );
  };

  // TODO: decreaseMonth 함수 생성 - setCurrentDate 이용
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
