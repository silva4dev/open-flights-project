import React from "react";
import { IEntityReview } from "../../../interfaces/IEntityReview";
import { Card, Title, Description, RatingContainer } from "./styles";
import { Rating } from "../../Rating";

export const Review: React.FC<IEntityReview> = (props) => {
  const { description, score, title } = props.attributes;
  return (
    <Card>
      <RatingContainer>
        <Rating score={score} />
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
};
