import React from "react";
import "./styles/index.css";

export const Rating: React.FC<{ score: number }> = (props) => {
  const score = (props.score / 5) * 100
  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: score + "%" }}></span>
    </span>
  );
}

