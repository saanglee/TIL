import "./App.css";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useReducer,
} from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// 2. App컴포넌트 밖 reducer 함수 생성 (상태변화 일어나기 전 state, action객체 )
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data; // 3-1. action객체에서 data프로퍼티를 꺼내 리턴 = 새로운 state
    }
    case "CREATE": {
      // 4-1.
      const create_date = new Date().getTime();
      const newItem = {
        ...action.data,
        create_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      // 5-1.
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      // 6-1.EDIT타입의 액션 발생 시 targetid와 newContent가 액션으로 전달됨 - 기존 state에 map사용해서 ...
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      // return하는 state값이 새로운 상태값
      return state;
  }
};

function App() {
  // 1. 기존 state삭제 및 useReducer 구현
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);
  //================================ getData ================================
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
    // 3. setData삭제 및 dispatch
    dispatch({ type: "INIT", data: initData }); // data:초기화 할 값
  };

  useEffect(() => {
    getData();
  }, []);

  //================================ onCreate - useCallback ================================

  const onCreate = useCallback((author, content, emotion) => {
    // 4. 기존 내용 삭제, dispatch
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    }); // (created_date는 그냥 reducer에서 만들어 사용할거)
    dataId.current += 1;
  }, []);

  //================================ onRemove - useCallback ================================
  const onRemove = useCallback((targetId) => {
    // 5. setData삭제 및 dispatch
    dispatch({ type: "REMOVE", targetId });
  }, []);

  //================================ onEdit - useCallback ================================
  const onEdit = useCallback((targetId, newContent) => {
    // 6.
    dispatch({ type: "EDIT", targetId, newContent });
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
