import { Menu } from './Menu';
import { MenuSizeId } from './MenuSizeId';
import { CategoryId } from './CategoryId';

export interface IMenuRepository {
  save(menu: Menu, sizeId: MenuSizeId, categoryId: CategoryId);
  nextIdentity();
}
