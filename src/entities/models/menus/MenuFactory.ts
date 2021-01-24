import { Menu, Price, MenuId, IMenuFactory, IMenuRepository } from "./";
import { SizeId } from "../sizes";
import { CategoryId } from "../categories";

export class MenuFactory implements IMenuFactory {
  #menuRepository: IMenuRepository;

  constructor(menuRepository: IMenuRepository) {
    this.#menuRepository = menuRepository;
  }

  async createMenu(
    name: string, 
    description: string,
    sizeId: SizeId,
    categoryId: CategoryId,
    price: number
    ): Promise<Menu> {

    const menuId: MenuId = await this.#menuRepository.nextIdentity();
    return new Menu(
      menuId,
      name,
      description,
      sizeId, 
      categoryId,
      new Price(price)
    );
  }
}
