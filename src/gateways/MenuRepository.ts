import Model from '../models';
import { Sequelize } from 'sequelize';
import { IMenuRepository } from "../entities/IMenuRepository";
import { Menu } from '../entities/Menu';
import { MenuId } from '../entities/MenuId';
import { Category } from '../entities/Category';

export class MenuRepository implements IMenuRepository {
  async save(menu: Menu, category: Category) {
    await Model.Menus.create({
      name: menu.name,
      description: menu.description,
      category_id: category.id.value,
      size: menu.size.id.value,
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
        name: name,
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
