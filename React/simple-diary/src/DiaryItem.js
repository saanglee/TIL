import { useState } from "react";

const DiaryItem = ({
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  // < 6-6 데이터 수정하기 >
  // isEdit State 생성 | toggleisEdit 함수생성(-> isEdit 상태 값을 반전시킴)
  const [isEdit, setisEdit] = useState(false);
  const toggleisEdit = () => {
    setisEdit(!isEdit);
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?!`)) {
      onRemove(id); // 함수 호출 (----> App컴포넌트 onRemove)
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button onClick={handleRemove}>삭제하기</button>
      <button onClick={toggleisEdit}>수정하기</button>{" "}
      {/* onClick에 toggleisEdit 함수 넣어주기 */}
    </div>
  );
};
export default DiaryItem;
