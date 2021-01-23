import { MenuCreateOutputData } from './MenuCreateOutputData';
import { MenuCreateInputData } from './MenuCreateInputData';
import { Category, ICategoryRepository } from '../../../entities/models/categories';
import { Menu, MenuSize, MenuFactory, IMenuFactory, IMenuRepository, ISizeRepository } from '../../../entities/models/menus';
import { MenuService } from '../../../entities/services/MenuService';

export class MenuCreateUseCase {
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

  async handle(inputData: MenuCreateInputData): Promise<MenuCreateOutputData> {
    const category: Category | null = await this.#categoryRepository.findByCategoryName(inputData.category);
    if (category === null) throw new Error('category invalid');

    const size: MenuSize | null = await this.#sizeRepository.findBySizeName(inputData.size);
    if (size === null) throw new Error('size invalid');

    const menuFactory: IMenuFactory = new MenuFactory(this.#menuRepository);
    try {
      const menu: Menu = await menuFactory.createMenu(
        inputData.name,
        inputData.description,
        category,
        size,
        inputData.price
      );

      const menuService = new MenuService(this.#menuRepository);
      if (await menuService.isExists(menu)) throw new Error('menu deplicated');

      this.#menuRepository.save(menu, category);

      return new MenuCreateOutputData(
        menu.name,
        menu.description,
        category.name,
        menu.size.name,
        menu.price.value
      );
    } catch(error) {
      throw new Error(error);
    }
  }
}
