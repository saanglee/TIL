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
  { value: "low_rating", name: "벌점 낮은 순" },
];

const List = ({ reviewList }) => {
  console.log("[List] reviewList prop -> ", reviewList);
  // console.log("[List] reviewList prop -> ", reviewList.dummyData[0].id); // FIXME: 왜 에러가 날깡..배열 렌더링 어케하지?
  const navigate = useNavigate();

  const [sorting, setSorting] = useState("latest");
  const [rateing, setRating] = useState("high_rating");

  return (
    <div className="List">
      {/* 상단 필터와 버튼 */}
      <div className="menu_wrapper">
        <div className="filters">
          <FilterMenu
            value={sorting}
            onChange={setSorting}
            optionList={SortWithTime}
          />
          <FilterMenu
            value={rateing}
            onChange={setRating}
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
      <div>{reviewList.id}</div>
      {/* FIXME: 위에 코드 안뜸 */}
    </div>
  );
};

List.defaultProps = {
  reviewList: "reviewList프롭이 정상적으로 전달되지 않음",
  // reviewList: [],
};

export default List;
