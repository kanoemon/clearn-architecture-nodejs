import { MenuId, Menu } from './';
import { Category } from '../categories';

export interface IMenuRepository {
  save(menu: Menu, category: Category);
  nextIdentity();
  findIdByName(name: string): Promise<MenuId | null>;
  findById(menuId: MenuId);
}
