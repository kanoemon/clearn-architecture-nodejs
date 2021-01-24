import { MenuId, Menu } from './';
import { Size } from '../sizes';
import { Category } from '../categories';

export interface IMenuRepository {
  save(menu: Menu, size: Size, category: Category);
  nextIdentity();
  findIdByName(name: string): Promise<MenuId | null>;
  findById(menuId: MenuId);
}
