import { Menu } from './Menu';
import { MenuSize } from './MenuSize';
import { Category } from './Category';

export interface IMenuFactory {
  createMenu(
    name: string, 
    decription: string,
    category: Category,
    size: MenuSize,
    price: number
  ): Promise<Menu>;
}
