import { MenuGetOutputData } from './MenuGetOutputData';
import { MenuGetInputData } from './MenuGetInputData';
import { MenuId } from '../../../entities/models/menus';
import { IMenuQueryService } from '../shared/IMenuQueryService';
import { IGetMenuByIdWithAdditionalInformationResult } from '../shared/IGetMenuByIdWithAdditionalInformationResult';

export class MenuGetUseCase {
  #menuQueryService: IMenuQueryService;

  constructor(menuQueryService: IMenuQueryService) {
    this.#menuQueryService = menuQueryService;
  }

  async handle(inputData: MenuGetInputData) {
    const menuId: MenuId = new MenuId(inputData.id);
    const menu: IGetMenuByIdWithAdditionalInformationResult | null = await this.#menuQueryService.getMenuByIdWithAdditionalInfomation(menuId);
    if (menu === null) throw new Error('menu not found');

    return new MenuGetOutputData(
      menu.menuName,
      menu.menuDescription,
      menu.categoryName,
      menu.sizeName,
      menu.price
    );
  }
}
