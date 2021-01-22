import { Category } from './Category';
import { CategoryId } from './CategoryId';

export interface ICategoryRepository {
  findIdByCategoryName(name: string): Promise<CategoryId | null> ;
}
