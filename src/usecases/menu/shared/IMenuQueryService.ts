import { MenuId } from "../../../entities/models/menus";
import { IGetMenuByIdWithAdditionalInformationResult } from './IGetMenuByIdWithAdditionalInformationResult';

export interface IMenuQueryService {
  getMenuByIdWithAdditionalInfomation(menuId: MenuId): Promise<IGetMenuByIdWithAdditionalInformationResult | null>;
}
