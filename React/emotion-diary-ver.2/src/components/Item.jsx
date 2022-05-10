import React, { useState, useEffect, useContext } from "react";
import { BookReviewDispatchContext, BookReviewStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const Item = ({ id, title, author, rating, date, content }) => {
  const navigate = useNavigate();
  const { onEdit, onRemove } = useContext(BookReviewDispatchContext);
  const reviewList = useContext(BookReviewStateContext);
  // const [itemToRemove, setItemToRemove] = useState();
  // console.log("reviewList -> ", reviewList);

  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const strDate = new Date(parseInt(date)).toLocaleDateString(
    "ko-KR",
    dateOptions
  );

  const goDetail = () => {
    navigate(`review/${id}`);
  };
  const goEdit = () => {
    navigate(`edit/${id}`);
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?!`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <article className="info_wrapper" onClick={goDetail}>
        {/* title & author area */}
        <h2 className="h2_title">{title}</h2>
        <h3 className="h3_author"> {author}</h3>
        {/* rating area */}
        <p className="stars">별점: {rating}</p>
        {/* date & content area */}
        <p className="p_date">{strDate}</p>
        <p className="p_content">{content.slice(0, 25)}</p>
      </article>
      {/* button area */}
      <div className="btn_wrapper">
        <MyButton text={"수정하기"} onClick={goEdit} />
        {/* TODO: 삭제하기 버튼 기능 구현 */}
        <MyButton text={"삭제하기"} onClick={handleRemove} />
      </div>
    </div>
  );
};

export default Item;
