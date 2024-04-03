import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <p className="rate">Rate my project :</p>
      <div className="star-container">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                key={`star-${currentRating}`}
                size={30}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
                onClick={() => {
                  alert(`Your rating is ${currentRating}/5`);
                }}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
