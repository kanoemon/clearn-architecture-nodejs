import { Category } from '../entities/Category';
import { CategoryId } from '../entities/CategoryId';

export interface ICategoryRepository {
  findByCategoryName(name: string): Promise<Category | null> ;
  findIdByCategoryName(name: string): Promise<CategoryId | null> ;
}
