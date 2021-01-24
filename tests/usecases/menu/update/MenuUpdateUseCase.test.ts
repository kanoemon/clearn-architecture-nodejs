import Model from '../../../../src/models';
import { MenuUpdateUseCase } from '../../../../src/usecases/menu/update/MenuUpdateUseCase';
import { MenuUpdateInputData } from '../../../../src/usecases/menu/update/MenuUpdateInputData';
import { CategoryRepository } from '../../../../src/gateways/CategoryRepository';
import { SizeRepository } from '../../../../src/gateways/SizeRepository';
import { MenuRepository } from '../../../../src/gateways/MenuRepository';

describe('update menu', () => {
  beforeEach(async () => {
    await Model.Menus.destroy({
      truncate: true
    });
  });

  it ('success menu name', async () => {
    await Model.Menus.create({
      name: 'MenuUpdateUseCaseTest1',
      description: '冬におすすめ',
      category_id: 1,
      size_id: 1,
      price: 500
    });
    const hasMenus = await Model.Menus.findAll({
      attributes: ['id'],
      where: {
        name: 'MenuUpdateUseCaseTest1',
      }
    });

    const inputData = new MenuUpdateInputData(
      hasMenus[0].dataValues.id, 
      'MenuUpdateUseCaseTest1Changed',
      null,
      null,
      null,
      null
    );
    const usecase = new MenuUpdateUseCase(
      new CategoryRepository(),
      new SizeRepository(),
      new MenuRepository()
    );
    const outputData = await usecase.handle(inputData);
    expect(outputData.name).toBe('MenuUpdateUseCaseTest1Changed');
    expect(outputData.description).toBe('冬におすすめ');
    expect(outputData.category).toBe('drink');
    expect(outputData.size).toBe('short');
    expect(outputData.price).toBe(500);
  });
});
