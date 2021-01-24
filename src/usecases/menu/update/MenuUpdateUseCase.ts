import { MenuUpdateOutputData } from './MenuUpdateOutputData';
import { MenuUpdateInputData } from './MenuUpdateInputData';
import { Category, ICategoryRepository } from '../../../entities/models/categories';
import { Menu, MenuFactory, IMenuFactory, IMenuRepository, MenuId } from '../../../entities/models/menus';
import { Size, ISizeRepository } from '../../../entities/models/sizes';
import { MenuService } from '../../../entities/services/MenuService';

export class MenuUpdateUseCase {
  #categoryRepository: ICategoryRepository;
  #sizeRepository: ISizeRepository;
  #menuRepository: IMenuRepository;

  constructor(
    categoryRepository: ICategoryRepository,
    sizeRepository: ISizeRepository,
    menuRepository: IMenuRepository
    ) {
    this.#categoryRepository = categoryRepository;
    this.#sizeRepository = sizeRepository;
    this.#menuRepository = menuRepository;
  }

  async handle(inputData: MenuUpdateInputData): Promise<MenuUpdateOutputData> {
    const menuId: MenuId = new MenuId(inputData.id);
    const menu: Menu | null = await this.#menuRepository.findById(menuId);
    if (menu === null) throw new Error('menu not found');

    if (inputData.name) menu.changeName(inputData.name);

    await this.#menuRepository.save(menu);

    return new MenuUpdateOutputData(

    );
  }
}
