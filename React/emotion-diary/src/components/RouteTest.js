import { Link } from "react-router-dom";
// CSR방식으로 페이지 이동시켜주는 컴포넌트 사용
const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>Diary</Link>
      <br />
      <Link to={"/new"}>New</Link>
      <br />
      <Link to={"/edit"}>Edit</Link>
    </>
  );
};

export default RouteTest;
