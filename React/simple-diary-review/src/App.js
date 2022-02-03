import "./App.css";
import React, { useMemo, useEffect, useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import OptimizeTest from "./components/OptimizeTest";

const App = () => {
  // 일기 아이템 관리할 state
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // API가져와 일기 기초 데이터 생성
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  // App컴포넌트 마운트 시 getData호출
  useEffect(() => {
    getData();
  }, []);

  const getDataAnalysis = useMemo(() => {
    console.log("일기 분석 시작⭐️");
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  const { goodCount, badCount, goodRatio } = getDataAnalysis;

  // 일기 리스트에 일기아이템 추가 함수 (저장버튼 누를 시)
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId); // targetid 아이템 제외한 새로운 배열 생성
    console.log(newDiaryList);
    setData(newDiaryList);
  };
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="App">
      <OptimizeTest />
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 개수: {data.length}개</div>
      <div>기분 좋은 일기 개수: {goodCount}개</div>
      <div>기분 나쁜 일기 개수: {badCount}개</div>
      <div>기분 좋은 일기 비율: {goodRatio}%</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};
export default App;
