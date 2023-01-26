import React from "react";
import { IEntityAirlineAndReview } from "../../../interfaces/IEntityAirlineAndReview";
import { Wrapper, TotalReviews, TotalOutOf } from "./styles";
import { Rating } from "../../Rating";

export const Header: React.FC<IEntityAirlineAndReview> = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  return (
    <Wrapper>
      <h1>
        <img src={image_url} width="50" height="50" alt={name} />
        {name}
      </h1>
      <div>
        <TotalReviews>
          <span className="review-count">{props.reviews ? props.reviews.length : 0}</span> user reviews
        </TotalReviews>
        <Rating score={avg_score} />
        <TotalOutOf>{avg_score.toFixed(1)} out of 5 stars</TotalOutOf>
      </div>
    </Wrapper>
  );
};
