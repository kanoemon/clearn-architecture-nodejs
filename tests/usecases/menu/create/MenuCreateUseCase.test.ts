import { MenuCreateUseCase } from '../../../../src/usecases/menu/create/MenuCreateUseCase';
import { MenuCreateInputData } from '../../../../src/usecases/menu/create/MenuCreateInputData';

describe('create menu', () => {
  it ('success', () => {
    const inputData = new MenuCreateInputData(
      'ドリップコーヒー',
      '美味しいドリップコーヒーです',
      'drink',
      'short',
      300
    );
    const usecase = new MenuCreateUseCase();
    const outputData = usecase.handle(inputData);
    expect(outputData.name).toBe('ドリップコーヒー');
    expect(outputData.description).toBe('美味しいドリップコーヒーです');
    expect(outputData.category).toBe('drink');
    expect(outputData.size).toBe('short');
    expect(outputData.price).toBe(300);
  });
});
