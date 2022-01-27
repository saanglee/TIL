const DiaryList = ({ diaryList }) => {
  //받아온 배열을 콘솔에 출력
  console.log(diaryList);
  return (
    <div className="DairyList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <div>
            <div>작성자: {it.author}</div>
            <div>일기: {it.content}</div>
            <div>감정: {it.emotion}</div>
            <div>작성시간(ms): {it.created_time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
