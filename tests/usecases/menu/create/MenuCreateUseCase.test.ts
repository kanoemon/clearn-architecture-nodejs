import { MenuCreateUseCase } from '../../../../src/usecases/menu/create/MenuCreateUseCase';
import { MenuCreateInputData } from '../../../../src/usecases/menu/create/MenuCreateInputData';
import { CategoryRepository } from '../../../../src/gateways/CategoryRepository';
import { SizeRepository } from '../../../../src/gateways/SizeRepository';

describe('create menu', () => {
  it ('success', async () => {
    const inputData = new MenuCreateInputData(
      'ドリップコーヒー',
      '美味しいドリップコーヒーです',
      'drink',
      'short',
      300
    );
    const usecase = new MenuCreateUseCase(
      new CategoryRepository(),
      new SizeRepository()
    );
    const outputData = await usecase.handle(inputData);
    expect(outputData.name).toBe('ドリップコーヒー');
    expect(outputData.description).toBe('美味しいドリップコーヒーです');
    expect(outputData.category).toBe('drink');
    expect(outputData.size).toBe('short');
    expect(outputData.price).toBe(300);
  });
});
