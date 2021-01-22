import { MenuCreateOutputData } from './MenuCreateOutputData';
import { MenuCreateInputData } from './MenuCreateInputData';
import { CategoryId } from '../../../entities/CategoryId';
import { MenuSizeId } from '../../../entities/MenuSizeId';
import { Menu } from '../../../entities/Menu';
import { ISizeRepository } from '../../ISizeRepository';
import { ICategoryRepository } from '../../../entities/ICategoryRepository';
import { IMenuRepository } from '../../../entities/IMenuRepository';
import { MenuFactory } from '../../../entities/MenuFactory';
import { IMenuFactory } from '../../../entities/IMenuFactory';

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
    const categoryId: CategoryId | null = await this.#categoryRepository.findIdByCategoryName(inputData.category);
    if (categoryId === null) throw new Error('category invalid');

    const sizeId: MenuSizeId | null = await this.#sizeRepository.findIdByCategoryName(inputData.size);
    if (sizeId === null) throw new Error('size invalid');

    const menuFactory: IMenuFactory = new MenuFactory(this.#menuRepository);
    try {
      const menu: Menu = await menuFactory.createMenu(
        inputData.name,
        inputData.description,
        inputData.category,
        inputData.size,
        inputData.price
      );
      this.#menuRepository.save(menu, sizeId, categoryId);

      return new MenuCreateOutputData(
        menu.name,
        menu.description,
        menu.category.name,
        menu.size.name,
        menu.price.value
      );
    } catch(error) {
      throw new Error(error);
    }
  }
}
