import React from "react";
import { useNavigate } from "react-router";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  // date의 ms'로 시간객체 생성 - date가 문자열일 경우 대비 parseInt
  // toLocaleDateString : 년 월 일
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  // 일기 상세페이지 이동 함수
  const goDetail = () => {
    navigate(`diary/${id}`);
  };
  const goEdit = () => {
    navigate(`edit/${id}`);
  };
  // 일기 수정페이지 이동 함수

  return (
    <div className="DiaryItem">
      {/* emotion item area */}
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      {/* date & content area */}
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>

      {/* button area */}
      <div className="btn_wrapper">
        <MyButton onClick={goEdit} text={"수정하기"}></MyButton>
      </div>
    </div>
  );
};

export default DiaryItem;
