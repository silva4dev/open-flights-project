import { IEntityReview } from './IEntityReview';

export interface IEntityAirlineAttributes {
  name: string; 
  slug: string; 
  image_url: string;
  avg_score: number;
}

interface IEntityAirlineRelationshipsReviewsData {
  id: number;
  type: string;
}

interface IEntityAirlineRelationships { 
  reviews: { data: IEntityAirlineRelationshipsReviewsData[] };
}

export interface IEntityAirlineData {
  data: IEntityAirline;
  included?: IEntityReview[];
}

export interface IEntityAirline { 
  id?: number;
  type?: string;
  attributes: IEntityAirlineAttributes;
  relationships?: IEntityAirlineRelationships;
}
