import { Category } from '../entities/Category';
import Model from '../models';
import { ICategoryRepository } from '../usecases/ICategoryRepository';

export class CategoryRepository implements ICategoryRepository {
  async findByCategoryName(name: string): Promise<Category | null> {
    const categories = await Model.Categories.findAll({
      attributes: ['id'],
      where: {
        name: name
      }
    });
    if (categories.length === 0) {
      return null;
    }

    return new Category(
      categories[0].dataValues.id,
      name
    );
  }
}
