import { CategoryId } from '../entities/CategoryId';
import Model from '../models';
import { ICategoryRepository } from '../entities/ICategoryRepository';

export class CategoryRepository implements ICategoryRepository {
  async findIdByCategoryName(name: string): Promise<CategoryId | null> {
    const categories = await Model.Categories.findAll({
      attributes: ['id'],
      where: {
        name: name
      }
    });
    if (categories.length === 0) {
      return null;
    }

    return new CategoryId(
      categories[0].dataValues.id
    );
  }
}
