import { MenuQueryService } from '../../../../src/gateways/MenuQueryService';
import Model from '../../../../src/models';
import { MenuGetInputData } from '../../../../src/usecases/menu/get/MenuGetInputData';
import { MenuGetUseCase } from '../../../../src/usecases/menu/get/MenuGetUseCase';

describe('get menu', () => {
  beforeEach(async () => {
    await Model.Menus.destroy({
      truncate: true
    });
  });

  it ('success', async() => {
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

    const inputData = new MenuGetInputData(hasMenus[0].dataValues.id);
    const usecase = new MenuGetUseCase( new MenuQueryService() );
    const outputData = await usecase.handle(inputData);

    expect(outputData.name).toBe('MenuGetUseCaseTest1');
    expect(outputData.description).toBe('冬におすすめ');
    expect(outputData.category).toBe('drink');
    expect(outputData.size).toBe('short');
    expect(outputData.price).toBe(500);
  });
});
