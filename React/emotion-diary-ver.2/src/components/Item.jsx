import React from "react";
import MyButton from "./MyButton";

const Item = ({ id, title, author, rating, date, content }) => {
  return (
    <div className="DiaryItem">
      <div className="info_wrapper">
        {/* title & author area */}
        <div className="title_author">
          {title}
          {author}
        </div>
        {/* rating area */}
        <div className="stars">별점</div>
        {/* date & content area */}
        <div className="date_content">작성일, 날짜</div>
        {/* button area */}
        <div className="btn_wrapper">
          <MyButton text={"수정하기"} onClick={() => {}} />
          <MyButton text={"삭제하기"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Item;
