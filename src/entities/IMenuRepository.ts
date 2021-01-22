import { Menu } from './Menu';
import { MenuId } from './MenuId';
import { Category } from './Category';

export interface IMenuRepository {
  save(menu: Menu, category: Category);
  nextIdentity();
  findIdByName(name: string): Promise<MenuId | null>;
}
