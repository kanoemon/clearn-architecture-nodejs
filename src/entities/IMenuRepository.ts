import { Menu } from './Menu';
import { MenuSizeId } from './MenuSizeId';
import { CategoryId } from './CategoryId';
import { MenuId } from './MenuId';

export interface IMenuRepository {
  save(menu: Menu, sizeId: MenuSizeId, categoryId: CategoryId);
  nextIdentity();
  findIdByName(name: string): Promise<MenuId | null>;
}
