import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
const dummyList = [
  {
    id: 1,
    author: "이상지",
    content: "화이팅",
    emotion: 1,
    created_date: new Date().getTime(), // getTime()메서드 - Date객체를 밀리세컨즈로 , 숫자로 변환해서 저장
  },
  {
    id: 2,
    author: "봄이",
    content: "츄르..",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "장군이",
    content: "난 너무 기여워",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];
const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};
export default App;
