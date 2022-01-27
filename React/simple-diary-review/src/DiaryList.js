import DiaryItem from "./Diary.Item";

const DiaryList = ({ diaryList }) => {
  //받아온 배열을 콘솔에 출력
  console.log(diaryList);
  return (
    <div className="DairyList">
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

// 일기리스트 - 빈 배열을 기본값으로 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
