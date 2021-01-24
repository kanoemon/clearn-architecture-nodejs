import Model from '../models';
import { Category, CategoryId, ICategoryRepository } from '../entities/models/categories';

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

  async findById(id: CategoryId): Promise<Category | null> {
    const categories = await Model.Categories.findAll({
      attributes: ['id', 'name'],
      where: {
        id: id.value
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
