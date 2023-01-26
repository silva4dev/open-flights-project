import React from "react";
import { IReviewFormData } from "../../../interfaces/IReviewFormData";
import { RatingContainer, RatingBox, Field, Wrapper, SubmitBtn, Headline, RatingTitle } from "./styles";

export const ReviewForm: React.FC<IReviewFormData> = (props) => {
  const { handleSubmit, handleChange, review, attributes, setRating } = props;
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <React.Fragment key={index}>
        <input
          type="radio"
          value={score}
          checked={review.score == score}
          name="rating"
          onChange={() => console.log("selected", score)}
          id={`rating-${score}`}
        />
        <label onClick={setRating.bind(this, score)}></label>
      </React.Fragment>
    );
  });
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Headline>Have an experience with {attributes.name}? Share your review!</Headline>
        <Field>
          <input
            onChange={handleChange}
            value={review.title || ''}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field>
          <input
            onChange={handleChange}
            value={review.description || ''}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle className="rating-title-text">Rate This Airline</RatingTitle>
            <RatingBox>{ratingOptions!}</RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  );
};
