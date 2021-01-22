import { Menu } from '../entities/Menu';
import { MenuSizeId } from '../entities/MenuSizeId';

export interface IMenuRepository {
  save(menu: Menu, sizeId: MenuSizeId);
}
