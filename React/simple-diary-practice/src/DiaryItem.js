const DiaryItem = ({ author, content, emotion, created_date, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleTimeString()}
        </span>
        <div className="content">{content}</div>
        <button
          onClick={() => {
            console.log(id);
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};
export default DiaryItem;
