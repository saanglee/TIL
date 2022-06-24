import styled from "styled-components";

const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  // type으로  "positive", "negative"이게 들어오면 이거 대로 하고 그 외 나머지는 다 default로 설정하려고
  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const Button = styled.button``;

export default MyButton;
