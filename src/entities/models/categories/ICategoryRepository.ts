import { Category } from './Category';

export interface ICategoryRepository {
  findByCategoryName(name: string): Promise<Category | null> ;
}
