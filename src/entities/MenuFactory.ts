import { Category } from "./Category";
import { IMenuFactory } from "./IMenuFactory";
import { IMenuRepository } from "./IMenuRepository";
import { MenuId } from './MenuId';
import { MenuSize } from "./MenuSize";
import { Price } from "./Price";
import { Menu } from "./Menu";

export class MenuFactory implements IMenuFactory {
  #menuRepository: IMenuRepository;

  constructor(menuRepository: IMenuRepository) {
    this.#menuRepository = menuRepository;
  }

  async createMenu(
    name: string, 
    description: string,
    category: string,
    size: string,
    price: number
    ): Promise<Menu> {

    const menuId: MenuId = await this.#menuRepository.nextIdentity();
    return new Menu(
      menuId,
      name,
      description,
      new Category(category),
      new MenuSize(size),
      new Price(price)
    );
  }
}
