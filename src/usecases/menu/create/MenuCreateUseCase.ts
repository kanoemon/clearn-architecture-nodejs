import { MenuCreateOutputData } from './MenuCreateOutputData';
import { MenuCreateInputData } from './MenuCreateInputData';
import { Category } from '../../../entities/Category';
import { MenuSize } from '../../../entities/MenuSize';
import { Menu } from '../../../entities/Menu';
import { Price } from '../../../entities/Price';

export class MenuCreateUseCase {
  handle(inputData: MenuCreateInputData): MenuCreateOutputData {
    const menu = new Menu(
      inputData.name,
      inputData.description,
      new Category(inputData.category),
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
