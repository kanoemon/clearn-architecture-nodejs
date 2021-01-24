import { Category, CategoryId } from './';

export interface ICategoryRepository {
  findByCategoryName(name: string): Promise<Category | null> ;
  findById(id: CategoryId): Promise<Category | null> ;
}
