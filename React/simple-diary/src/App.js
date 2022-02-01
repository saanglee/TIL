import "./App.css";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import OptimizeTest from "./OptimizeTest";
// import Lifecycle from "./Lifecycle";

function App() {
  const [data, SetData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        create_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    SetData(initData);
  };
  // getData함수 호출 - App컴포넌트가 마운트 되자마자 (depth에 빈배열)
  useEffect(() => {
    getData();
  }, []);

  //================================ onCreate - useCallback ================================

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    SetData((data) => [newItem, ...data]); // 함수형 업데이트
  }, []);

  //================================ onRemove - useCallback ================================
  const onRemove = useCallback((targetId) => {
    SetData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  //================================ onEdit - useCallback ================================
  const onEdit = useCallback((targetId, newContent) => {
    SetData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);
  //=======================================================
  const getDataAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  // data의 길이가 변화하지 않으면 useMemo 콜백함수 연산을 실행하지 않음!

  // getDataAnalysis는 이제 함수가 아님! useMemo 콜백함수의 값!
  const { goodCount, badCount, goodRatio } = getDataAnalysis;

  return (
    <div className="App">
      {/* <OptimizeTest /> */}
      {/* <Lifecycle /> */}

      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 개수: {data.length}개 </div>
      <div>기분 좋은 일기 개수: {goodCount}개 </div>
      <div>기분 나쁜 일기 개수: {badCount}개 </div>
      <div>기분 좋은 일기 비율: {goodRatio}% </div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
