import { useNavigate } from "react-router";
import React, { useState } from "react";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

// date객체를 전달받아 년-월-일로 변환하는 함수
const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const New = () => {
  // console.log(getStringDate(new Date())); // getStringDate 함수 확인
  const [date, setDate] = useState(getStringDate(new Date())); // 오늘 날짜를 초기값으로 설정하기
  const navigate = useNavigate();
  return (
    <div>
      <MyHeader
        headText={"새로운 일기 쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default New;
