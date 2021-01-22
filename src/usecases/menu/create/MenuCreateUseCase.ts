import { MenuCreateOutputData } from './MenuCreateOutputData';
import { MenuCreateInputData } from './MenuCreateInputData';
import { Category } from '../../../entities/Category';
import { MenuSize } from '../../../entities/MenuSize';
import { MenuSizeId } from '../../../entities/MenuSizeId';
import { Menu } from '../../../entities/Menu';
import { Price } from '../../../entities/Price';
import { ICategoryRepository } from '../../ICategoryRepository';
import { ISizeRepository } from '../../ISizeRepository';
import { exception } from 'console';
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
    const category: Category | null = await this.#categoryRepository.findByCategoryName(inputData.category);
    if (category === null) throw new Error('category invalid');

    const sizeId: MenuSizeId | null = await this.#sizeRepository.findIdByCategoryName(inputData.size);
    if (sizeId === null) throw new Error('size invalid');

    const menu = new Menu(
      inputData.name,
      inputData.description,
      category,
      new MenuSize(inputData.size),
      new Price(inputData.price)
    );
    this.#menuRepository.save(menu, sizeId);

    return new MenuCreateOutputData(
      menu.name,
      menu.description,
      menu.category.category,
      menu.size.value,
      menu.price.price
    );
  }
}
