import { Menu } from '../entities/Menu';
import { MenuSizeId } from '../entities/MenuSizeId';
import { CategoryId } from '../entities/CategoryId';

export interface IMenuRepository {
  save(menu: Menu, sizeId: MenuSizeId, categoryId: CategoryId);
}
