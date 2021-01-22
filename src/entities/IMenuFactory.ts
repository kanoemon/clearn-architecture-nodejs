import { Menu } from './Menu';

export interface IMenuFactory {
  createMenu(
    name: string, 
    decription: string,
    category: string,
    size: string,
    price: number
  ): Promise<Menu>;
}
