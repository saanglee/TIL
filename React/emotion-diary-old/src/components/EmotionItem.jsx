import React from "react";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={() => onClick(emotion_id)}
      // onClick 시 emotion_id를 받으면 -> DiaryEditor의 handleClickEmote가 emotion_id을 emotion파라미터로 받는다. -> setEmotion수행 -> emotion state 변경
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default EmotionItem;
