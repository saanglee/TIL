import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  // App.js에서 dummyList받아옴 (프롭으로)
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// undefined 들어올 경우 에러처리
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
