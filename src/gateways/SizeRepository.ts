import { MenuSizeId } from '../entities/MenuSizeId';
import Model from '../models';
import { ISizeRepository } from '../usecases/ISizeRepository';

export class SizeRepository implements ISizeRepository {
  async findIdByCategoryName(name: string): Promise<MenuSizeId | null> {
    const sizes = await Model.Sizes.findAll({
      attributes: ['id'],
      where: {
        name: name,
        delete_flg: false
      }
    });
    if (sizes.length === 0) {
      return null;
    }

    return new MenuSizeId(
      sizes[0].dataValues.id
    );

  }
}
