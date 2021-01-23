import { Category } from "../categories";
import { Menu, Price, MenuId, MenuSize, IMenuFactory, IMenuRepository } from "./";

export class MenuFactory implements IMenuFactory {
  #menuRepository: IMenuRepository;

  constructor(menuRepository: IMenuRepository) {
    this.#menuRepository = menuRepository;
  }

  async createMenu(
    name: string, 
    description: string,
    category: Category,
    size: MenuSize,
    price: number
    ): Promise<Menu> {

    const menuId: MenuId = await this.#menuRepository.nextIdentity();
    return new Menu(
      menuId,
      name,
      description,
      size,
      new Price(price)
    );
  }
}
