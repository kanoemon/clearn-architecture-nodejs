import Model from '../models';
import { Sequelize } from 'sequelize';
import { Menu, MenuId, IMenuRepository, Price } from "../entities/models/menus";
import { SizeId } from "../entities/models/sizes";
import { CategoryId } from '../entities/models/categories';
import { REPL_MODE_SLOPPY } from 'repl';

export class MenuRepository implements IMenuRepository {
  async save(menu: Menu) {
    await Model.Menus.upsert({
      name: menu.name,
      description: menu.description,
      category_id: menu.categoryId.value,
      size: menu.sizeId.value,
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

  async findById(menuId: MenuId): Promise<Menu | null> {
    const menus = await Model.Menus.findAll({
      attributes: ['id', 'name', 'description', 'size_id', 'category_id', 'price'],
      where: {
        id: menuId.value,
        delete_flg: false
      },
    });
    if (menus.length === 0) return null;

    return new Menu(
      menuId,
      menus[0].dataValues.name,
      menus[0].dataValues.description,
      new SizeId(menus[0].dataValues.size_id),
      new CategoryId(menus[0].dataValues.category_id),
      new Price(menus[0].dataValues.price),
    );
  }

  async remove(menu: Menu) {
    await Model.Menus.update(
      { delete_flg: false },
      { where: {
          id: menu.id.value
        }
      }
    );
  }
}
