import Model from '../../../../src/models';
import { MenuUpdateUseCase } from '../../../../src/usecases/menu/update/MenuUpdateUseCase';
import { MenuUpdateInputData } from '../../../../src/usecases/menu/update/MenuUpdateInputData';
import { CategoryRepository } from '../../../../src/gateways/CategoryRepository';
import { SizeRepository } from '../../../../src/gateways/SizeRepository';
import { MenuRepository } from '../../../../src/gateways/MenuRepository';

describe('create menu', () => {
  beforeEach(async () => {
    await Model.Menus.destroy({
      truncate: true
    });
  });

  it ('success menu name', async () => {
    const inputData = new MenuUpdateInputData(
      1, 
      'MenuUpdateUseCaseTestChanged',
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
    expect(outputData.name).toBe('ドリップコーヒー');
    expect(outputData.description).toBe('美味しいドリップコーヒーです');
    expect(outputData.category).toBe('drink');
    expect(outputData.size).toBe('short');
    expect(outputData.price).toBe(300);
  });
});
