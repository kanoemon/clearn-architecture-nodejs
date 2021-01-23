import { MenuSize } from './MenuSize';

export interface ISizeRepository {
  findBySizeName(name: string): Promise<MenuSize | null> ;
}
