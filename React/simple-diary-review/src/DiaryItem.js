import { useState, useRef } from "react";

const DiaryItem = ({
  onEdit,
  onRemove,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  const [localContent, setLocalContent] = useState(content); // 수정 내용 저장할 State
  // 수정 State 및 수정버튼 onClick 함수
  const [isEdit, setIsEdit] = useState(false); // true 수정중, false 수정중 아님
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    console.log(isEdit);
  };
  // 수정취소 onClick 함수
  const hadleQuitEdit = () => {
    setIsEdit(false); // 수정취소
    setLocalContent(content); // 기존내용으로 초기화
  };
  const localCurrentInput = useRef();
  // 수정완료 onClick 함수
  const handleEdit = () => {
    if (localContent.length < 5) {
      localCurrentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent); //
      toggleIsEdit(); // 수정 폼 해제 - false
    }
  };

  // 삭제버튼 onClick 함수
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?!`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea // true 수정 중
            value={localContent}
            onChange={(e) => {
              setLocalContent(e.target.value);
            }}
          />
        ) : (
          // false 수정 중 아님 - 기존 내용
          <>{content}</>
        )}
      </div>

      {isEdit ? ( // true 수정 중
        <>
          <button onClick={hadleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        // false 수정 중 아님
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
