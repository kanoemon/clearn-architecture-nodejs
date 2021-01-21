import { MenuCreateOutputData } from './MenuCreateOutputData';
import { MenuCreateInputData } from './MenuCreateInputData';
import { Category } from '../../../entities/Category';
import { MenuSize } from '../../../entities/MenuSize';
import { Menu } from '../../../entities/Menu';
import { Price } from '../../../entities/Price';
import { ICategoryRepository } from '../../ICategoryRepository';

export class MenuCreateUseCase {
  #categoryRepository: ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.#categoryRepository = categoryRepository;
  }

  async handle(inputData: MenuCreateInputData): Promise<MenuCreateOutputData> {
    const category: Category | null = await this.#categoryRepository.findByCategoryName(inputData.category);
    if (category === null) {
      // TODO: 仮
      return new MenuCreateOutputData(
        'ドリップコーヒー',
        '美味しいドリップコーヒーです',
        'drink',
        'short',
        300
      );
    }

    const menu = new Menu(
      inputData.name,
      inputData.description,
      category,
      new MenuSize(inputData.size),
      new Price(inputData.price)
    );
    return new MenuCreateOutputData(
      'ドリップコーヒー',
      '美味しいドリップコーヒーです',
      'drink',
      'short',
      300
    );
  }
}
