import Model from '../models';
import { MenuId } from "../entities/models/menus";
import { IMenuQueryService } from "../usecases/menu/shared/IMenuQueryService";
import { IGetMenuByIdWithAdditionalInformationResult } from "../usecases/menu/shared/IGetMenuByIdWithAdditionalInformationResult";
import { GetMenuByIdWithAdditionalInfomationResult } from './GetMenuByIdWithAdditionalInformationResult';

export class MenuQueryService implements IMenuQueryService {
  async getMenuByIdWithAdditionalInfomation(menuId: MenuId): Promise<IGetMenuByIdWithAdditionalInformationResult | null> {
    const menus = await Model.Menus.findAll({
      attributes: ['id', 'name', 'description', 'price'],
      where: {
        id: menuId.value,
        delete_flg: false
      },
      include: [
        {
          model: Model.Sizes,
          required: true,
          attributes: ['name'],
          where: {
            delete_flg: false
          }
        },
        {
          model: Model.Categories,
          required: true,
          attributes: ['name'],
          where: {
            delete_flg: false
          }
        }
      ]
    });
    if (menus.length === 0) return null;

    return new GetMenuByIdWithAdditionalInfomationResult(
      menus[0].dataValues.id,
      menus[0].dataValues.name,
      menus[0].dataValues.description,
      menus[0].dataValues.Category.dataValues.name,
      menus[0].dataValues.Size.dataValues.name,
      menus[0].dataValues.price
    );
  }
}
