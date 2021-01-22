import { MenuSizeId } from '../entities/MenuSizeId';

export interface ISizeRepository {
  findIdByCategoryName(name: string): Promise<MenuSizeId | null> ;
}
