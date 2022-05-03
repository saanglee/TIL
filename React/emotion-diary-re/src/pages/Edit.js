import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  // querya string 받는 방법
  const [searchPaarams, setSearchParams] = useSearchParams();
  const id = searchPaarams.get("id");
  console.log("id : ", id);

  const mode = searchPaarams.get("mode");
  console.log("mode : ", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다.</p>
      <button onClick={() => setSearchParams({ who: "SangJi" })}>
        QS바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
