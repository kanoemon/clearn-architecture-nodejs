import { CategoryId } from '../entities/CategoryId';
import { Category } from '../entities/Category';
import Model from '../models';
import { ICategoryRepository } from '../entities/ICategoryRepository';

export class CategoryRepository implements ICategoryRepository {
  async findByCategoryName(name: string): Promise<Category | null> {
    const categories = await Model.Categories.findAll({
      attributes: ['id', 'name'],
      where: {
        name: name
      }
    });
    if (categories.length === 0) {
      return null;
    }

    return new Category(
      new CategoryId(categories[0].dataValues.id),
      categories[0].dataValues.name
    );
  }
}
