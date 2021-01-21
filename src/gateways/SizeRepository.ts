import { MenuSize } from '../entities/MenuSize';
import Model from '../models';
import { ISizeRepository } from '../usecases/ISizeRepository';

export class SizeRepository implements ISizeRepository {
  async findByCategoryName(name: string): Promise<MenuSize | null> {
    const sizes = await Model.Sizes.findAll({
      attributes: ['id'],
      where: {
        name: name
      }
    });
    if (sizes.length === 0) {
      return null;
    }

    return new MenuSize(
      sizes[0].dataValues.id,
      name
    );
  }
}
