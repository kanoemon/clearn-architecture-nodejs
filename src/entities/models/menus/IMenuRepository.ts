import { MenuId, Menu } from './';

export interface IMenuRepository {
  save(menu: Menu);
  nextIdentity(): Promise<MenuId>;
  findIdByName(name: string): Promise<MenuId | null>;
  findById(menuId: MenuId): Promise<Menu | null>;
}
