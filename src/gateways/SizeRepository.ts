import { SizeId, Size, ISizeRepository } from '../entities/models/sizes'
import Model from '../models';

export class SizeRepository implements ISizeRepository {
  async findBySizeName(name: string): Promise<Size | null> {
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

    return new Size(
      new SizeId(sizes[0].dataValues.id),
      sizes[0].dataValues.name
    );
  }
}
