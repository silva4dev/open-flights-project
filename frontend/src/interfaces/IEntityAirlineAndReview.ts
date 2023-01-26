import { IEntityReview } from './IEntityReview';
import { IEntityAirlineAttributes } from './IEntityAirline';

export interface IEntityAirlineAndReview {
  attributes: IEntityAirlineAttributes;
  reviews: IEntityReview[];
}
