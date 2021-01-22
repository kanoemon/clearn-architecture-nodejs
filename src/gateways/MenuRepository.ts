import Model from '../models';
import { IMenuRepository } from "../usecases/IMenuRepository";
import { Menu } from '../entities/Menu';
import { MenuSizeId } from '../entities/MenuSizeId';

export class MenuRepository implements IMenuRepository {
  async save(menu: Menu, sizeId: MenuSizeId) {
    await Model.Menus.create({
      name: menu.name,
      description: menu.description,
      category_id: menu.category.id,
      size: sizeId.value,
      price: menu.price.price
    });
    return;
  }
}
