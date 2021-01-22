import Model from '../models';
import { IMenuRepository } from "../usecases/IMenuRepository";
import { Menu } from '../entities/Menu';

export class MenuRepository implements IMenuRepository {
  async save(menu: Menu) {
    await Model.Menus.create({
      name: menu.name,
      description: menu.description,
      category_id: menu.category.id,
      size: menu.size.id,
      price: menu.price.price
    });
    return;
  }
}
