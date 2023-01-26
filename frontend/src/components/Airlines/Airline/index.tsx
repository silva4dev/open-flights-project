import React from "react";
import { IEntityAirline } from "../../../interfaces/IEntityAirline";
import { Link } from "react-router-dom";
import { Card, AirlineLogo, LinkWrapper, AirlineName } from "./styles";
import { Rating } from "../../Rating";

export const Airline: React.FC<IEntityAirline> = (props) => {
  const { image_url, name, avg_score, slug } = props.attributes;
  return (
    <Card>
      <AirlineLogo>
        <img src={image_url} alt={name} />
      </AirlineLogo>
      <AirlineName>{name}</AirlineName>
      <Rating score={avg_score} />
      <LinkWrapper>
        <Link to={`/airlines/${slug}`}>View Airline</Link>
      </LinkWrapper>
    </Card>
  );
};
