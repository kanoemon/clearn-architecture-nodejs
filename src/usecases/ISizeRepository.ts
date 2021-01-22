import { MenuSize } from '../entities/MenuSize';

export interface ISizeRepository {
  findBySizeName(name: string): Promise<MenuSize | null> ;
}
