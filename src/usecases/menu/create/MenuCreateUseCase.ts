import { MenuCreateOutputData } from './MenuCreateOutputData';
import { MenuCreateInputData } from './MenuCreateInputData';
import { Category } from '../../../entities/Category';
import { CategoryId } from '../../../entities/CategoryId';
import { MenuSize } from '../../../entities/MenuSize';
import { MenuSizeId } from '../../../entities/MenuSizeId';
import { Menu } from '../../../entities/Menu';
import { Price } from '../../../entities/Price';
import { ICategoryRepository } from '../../ICategoryRepository';
import { ISizeRepository } from '../../ISizeRepository';
import { IMenuRepository } from '../../IMenuRepository';

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

    const menu = new Menu(
      inputData.name,
      inputData.description,
      new Category(inputData.category),
      new MenuSize(inputData.size),
      new Price(inputData.price)
    );
    this.#menuRepository.save(menu, sizeId, categoryId);

    return new MenuCreateOutputData(
      menu.name,
      menu.description,
      menu.category.name,
      menu.size.name,
      menu.price.value
    );
  }
}
