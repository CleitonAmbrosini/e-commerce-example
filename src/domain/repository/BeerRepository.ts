/* eslint-disable no-unused-vars */
import Beer from '../entities/Beer';
export default interface BeerRepository {
  getItem(idItem: number): Promise<Beer>;
}
