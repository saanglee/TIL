const DiaryList = ({ diaryList }) => {
  return (
    <div>
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};
// diaryList프롭이 정상적으로 전달되지 않을 경우 대비 - 빈배열 전달
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
