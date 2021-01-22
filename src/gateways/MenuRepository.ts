import Model from '../models';
import { Sequelize } from 'sequelize';
import { IMenuRepository } from "../entities/IMenuRepository";
import { Menu } from '../entities/Menu';
import { MenuSizeId } from '../entities/MenuSizeId';
import { CategoryId } from '../entities/CategoryId';
import { MenuId } from '../entities/MenuId';

export class MenuRepository implements IMenuRepository {
  async save(menu: Menu, sizeId: MenuSizeId, categoryId: CategoryId) {
    await Model.Menus.create({
      name: menu.name,
      description: menu.description,
      category_id: categoryId.value,
      size: sizeId.value,
      price: menu.price.value
    });
    return;
  }

  async nextIdentity(): Promise<MenuId> {
    const menus = await Model.Menus.findAll({
      attributes: [
        [ Sequelize.fn('max', Sequelize.col('id')), 'max_id' ]
      ],
      raw: true
    });

    if (menus.length === 0) {
      return new MenuId(1);
    }
    return new MenuId(menus.max_id + 1);
  }

  async findIdByName(name: string): Promise<MenuId | null> {
    const menus = await Model.Menus.findAll({
      attributes: ['id'],
      where: {
        delete_flg: false
      }
    });
    if (menus.length === 0) {
      return null;
    }

    return new MenuId(
      menus[0].dataValues.id
    );

  }
}
