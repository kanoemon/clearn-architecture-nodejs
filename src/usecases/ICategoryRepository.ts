import { Category } from '../entities/Category';

export interface ICategoryRepository {
  findByCategoryName(name: string): Promise<Category | null> ;
}
