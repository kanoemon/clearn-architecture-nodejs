import Model from '../../../../src/models';
import { MenuDeleteUseCase } from '../../../../src/usecases/menu/delete/MenuDeleteUseCase';
import { MenuDeleteInputData } from '../../../../src/usecases/menu/delete/MenuDeleteInputData';
import { MenuRepository } from '../../../../src/gateways/MenuRepository';

describe('delete menu', () => {
  beforeEach(async () => {
    await Model.Menus.destroy({
      truncate: true
    });
  });

  it ('success', async () => {
    await Model.Menus.create({
      name: 'MenuGetUseCaseTest1',
      description: '冬におすすめ',
      category_id: 1,
      size_id: 1,
      price: 500
    });
    const hasMenus = await Model.Menus.findAll({
      attributes: ['id'],
      where: {
        name: 'MenuGetUseCaseTest1',
      }
    });

    const inputData = new MenuDeleteInputData(
      hasMenus[0].dataValues.id
    );
    const usecase = new MenuDeleteUseCase(
      new MenuRepository()
    );
    const outputData = await usecase.handle(inputData);
    expect(outputData.id).toBe(hasMenus[0].dataValues.id);
  });
});
