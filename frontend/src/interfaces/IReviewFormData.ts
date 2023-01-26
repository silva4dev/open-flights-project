import { IEntityReviewAttributes } from './IEntityReview';
import { IEntityAirlineAttributes } from './IEntityAirline';

export interface IReviewFormData { 
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  attributes: IEntityAirlineAttributes;
  review: IEntityReviewAttributes;
  setRating: (score: number, e: React.FormEvent) => void;
}