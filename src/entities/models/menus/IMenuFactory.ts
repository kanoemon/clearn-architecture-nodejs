import { Menu, MenuSize } from './';
import { Category } from '../categories';

export interface IMenuFactory {
  createMenu(
    name: string, 
    decription: string,
    category: Category,
    size: MenuSize,
    price: number
  ): Promise<Menu>;
}
