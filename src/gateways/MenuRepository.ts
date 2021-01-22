import Model from '../models';
import { IMenuRepository } from "../usecases/IMenuRepository";
import { Menu } from '../entities/Menu';
import { MenuSizeId } from '../entities/MenuSizeId';
import { CategoryId } from '../entities/CategoryId';

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
}
