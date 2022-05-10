import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Edit = () => {
  const [rating, setRating] = useState(0); // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div>
      편집
      <Rating
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
      />
    </div>
  );
};

export default Edit;
