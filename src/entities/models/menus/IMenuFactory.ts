import { Menu } from './';
import { SizeId } from '../sizes';

export interface IMenuFactory {
  createMenu(
    name: string, 
    decription: string,
    sizeId: SizeId,
    price: number
  ): Promise<Menu>;
}
