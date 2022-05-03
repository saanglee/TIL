App컴포넌트의 OnEdit함수를 DiaryList(DiaryItem의 부모)로 전달함
-> DiaryList 컴포넌트에서 OnEdit을 프롭스로 받아서 다시 DiaryItem 컴포넌트한테 전달
-> DiaryItem 컴포넌으에서 OnEdit을 프롭으로 받음

```jsx
// DiaryItem.js
// 수정완료 버튼 누를 시 이벤트를 처리할 함수
const handleEdit = () => {
  if (localContent.length < 5) {
    localContentInput.current.focus();
    return;
  }
  if (window.confirm(`$(id)번째 일기를 수정하시겠습니까?`)) {
    onEdit(id, localContent); // 확인 -> 수정
    toggleisEdit(); // 수정 폼 닫아주기
  }
};
```

수정 완료 버튼 누르면 수정버튼 누르면 hendleEdit함수 호출

1. 본문 내용 5글자 인지 확인 - 5글자가 맞으면 return, 5글자 미만이면 현재 가리키는 돔요소(textarea)에 포커싱
2. 5글자 이상일 경우 - 수정하시겠습니까 물어봄 → 확인일 경우 onEdit함수 실행 & 수점 폼 닫아주기(toggle함수 호출 → false로 만듦)
