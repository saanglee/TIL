import React, { useState } from "react";
import { useNavigate } from "react-router";

import MyButton from "./MyButton";
import FilterMenu from "./FilterMenu";

const SortWithTime = [
  { value: "latest", name: "최신 순" },
  { value: "oldest", name: "오래된 순" },
];
const SortWithRate = [
  { value: "high_rating", name: "별점 높은 순" },
  { value: "low_rating", name: "별점 낮은 순" },
];

const List = ({ reviewList }) => {
  console.log("[List] reviewList prop -> ", reviewList);
  const navigate = useNavigate();

  const [sortingType, setSortingType] = useState("latest");
  const [ratingType, setRatingType] = useState("high_rating");

  const getFilteredList = () => {
    // TODO: 별점순 기능 구현
    const compare = (a, b) => {
      if (sortingType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    // 깊은 복사
    const copyReviewlist = JSON.parse(JSON.stringify(reviewList));
    const sortedReviewList = copyReviewlist.sort(compare);
    return sortedReviewList;
  };

  return (
    <div className="List">
      {/* 상단 필터와 버튼 */}
      <div className="menu_wrapper">
        <div className="filters">
          <FilterMenu
            value={sortingType}
            onChange={setSortingType}
            optionList={SortWithTime}
          />
          <FilterMenu
            value={ratingType}
            onChange={setRatingType}
            optionList={SortWithRate}
          />
        </div>
        <div className="creat_btn">
          <MyButton
            type={""}
            text={"북리뷰 작성"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>
      {/* 리뷰 목록 마크업 */}

      <div>
        {getFilteredList().map((item) => (
          <div key={item.id}>
            {item.content}
            {item.date}
          </div>
        ))}
      </div>
    </div>
  );
};

List.defaultProps = {
  reviewList: "reviewList프롭이 정상적으로 전달되지 않음",
  // reviewList: [],
};

export default List;
