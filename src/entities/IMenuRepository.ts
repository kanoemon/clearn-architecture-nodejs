import { Menu } from './Menu';
import { MenuId } from './MenuId';

export interface IMenuRepository {
  save(menu: Menu);
  nextIdentity();
  findIdByName(name: string): Promise<MenuId | null>;
}
