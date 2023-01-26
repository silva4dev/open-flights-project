import React from "react";
import axios from "../../config/axios";
import { IEntityAirline } from "../../interfaces/IEntityAirline";
import { Home, Header, Subheader, Grid } from "./styles";
import { Airline } from "./Airline";

export const Airlines: React.FC = () => {
  const [airlines, setAirlines] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/v1/airlines")
      .then((response) => setAirlines(response.data.data))
      .catch((data) => console.log('error', data));
  }, [airlines.length]);

  const grid = airlines.map((item: IEntityAirline) => {
    return <Airline key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Honest, unbiased airline reviews.</Subheader>
      </Header>
      <Grid>{grid}</Grid>
    </Home>
  );
};
