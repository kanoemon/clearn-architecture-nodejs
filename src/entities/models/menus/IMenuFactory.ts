import { Menu } from './';
import { SizeId } from '../sizes';
import { CategoryId } from '../categories';

export interface IMenuFactory {
  createMenu(
    name: string, 
    decription: string,
    sizeId: SizeId,
    categoryId: CategoryId,
    price: number
  ): Promise<Menu>;
}
