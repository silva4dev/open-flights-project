import React from "react";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { IEntityAirlineData } from "../../interfaces/IEntityAirline";
import { Wrapper, Column, Main } from "./styles";
import { ReviewForm } from "./ReviewForm";
import { IEntityReviewAttributes } from "../../interfaces/IEntityReview";
import { Review } from "./Review";


export const Airline: React.FC = () => {
  const [airline, setAirline] = React.useState<IEntityAirlineData>();
  const [review, setReview] = React.useState<IEntityReviewAttributes>();
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState("");
  const { slug } = useParams();

  React.useEffect(() => {
    axios
      .get(`/api/v1/airlines/${slug}`)
      .then((response) => {
        setAirline(response.data);
        setReview(response.data.included);
        setLoaded(true);
      })
      .catch((data) => console.log("error", data));
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const el = e.target as HTMLInputElement;
    setReview(Object.assign({}, review, { [el.name]: el.value }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const airline_id = airline!.data.id;
    axios
      .post(`/api/v1/reviews`, { review, airline_id })
      .then((response) => {
        const included = [...airline!.included!, response.data.data];
        setAirline({ ...airline!, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((response) => console.log(response));
  };

  const setRating = (score: number, e: React.FormEvent): void => {
    e.preventDefault();
    setReview({ ...review!, score });
  };

  let reviews;
  if (loaded && airline!.included) {
    reviews = airline!.included.map((item, index) => {
      return (
        <Review key={index} attributes={item!.attributes} />
      );
    });
  }

  return (
    <Wrapper>
      {loaded && (
        <React.Fragment>
          <Column>
            <Main>
              <Header
                attributes={airline!.data.attributes}
                reviews={airline!.included!}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline!.data.attributes}
              review={review!}
            />
          </Column>
        </React.Fragment>
      )}
    </Wrapper>
  );
};
