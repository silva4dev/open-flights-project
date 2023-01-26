export interface IEntityReviewAttributes {
  airline_id?: number;
  description: string;
  score: number;
  title: string;
}

export interface IEntityReview {
  id?: number;
  type?: string;
  attributes: IEntityReviewAttributes;
  length?: number;
}