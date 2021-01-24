import { Size, SizeId } from './';

export interface ISizeRepository {
  findBySizeName(name: string): Promise<Size | null> ;
  findIdBySizeName(name: string): Promise<SizeId | null> ;
}
