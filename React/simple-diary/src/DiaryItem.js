import { useState } from "react";

const DiaryItem = ({
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [isEdit, setisEdit] = useState(false);
  const toggleisEdit = () => {
    setisEdit(!isEdit);
  };

  // 수정 할 때 기존 내용 textarea에 남아있게 하기 - 초기값을 기존 content로 설정해주면 됨
  const [localContent, setLocalContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?!`)) {
      onRemove(id);
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
      {/* 수정하기 버튼 누르면 content에 수정 폼 띄우기 / 삼항연산자 사용 */}
      <div className="content">
        {isEdit ? (
          <textarea
            value={localContent}
            onChange={(e) => {
              setLocalContent(e.target.value);
            }}
          />
        ) : (
          <> {content} </>
        )}
      </div>

      {/* 내용 수정 중일 때 버튼 버튼 바뀌기 */}
      {isEdit ? (
        <>
          <button onClick={toggleisEdit}>수정 취소</button>
          <button>수정 완료</button>{" "}
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleisEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
