import { MenuSize } from '../entities/MenuSize';

export interface ISizeRepository {
  findByCategoryName(name: string): Promise<MenuSize | null> ;
}
