import { MenuSize } from '../entities/MenuSize';
import { MenuSizeId } from '../entities/MenuSizeId';
import Model from '../models';
import { ISizeRepository } from '../usecases/ISizeRepository';

export class SizeRepository implements ISizeRepository {
  async findBySizeName(name: string): Promise<MenuSize | null> {
    const sizes = await Model.Sizes.findAll({
      attributes: ['id', 'name'],
      where: {
        name: name,
        delete_flg: false
      }
    });
    if (sizes.length === 0) {
      return null;
    }

    return new MenuSize(
      new MenuSizeId(sizes[0].dataValues.id),
      sizes[0].dataValues.name
    );
  }
}
