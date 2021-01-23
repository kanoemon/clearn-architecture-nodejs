import { MenuQueryService } from '../../../../src/gateways/MenuQueryService';
import Model from '../../../../src/models';
import { MenuGetInputData } from '../../../../src/usecases/menu/get/MenuGetInputData';
import { MenuGetUseCase } from '../../../../src/usecases/menu/get/MenuGetUseCase';

describe('get menu', () => {
  it ('success', async() => {
    const inputData = new MenuGetInputData(60);
    const usecase = new MenuGetUseCase( new MenuQueryService() );
    const outputData = await usecase.handle(inputData);

    expect(outputData.name).toBe('ドリップコーヒー');
    expect(outputData.description).toBe('美味しいドリップコーヒーです');
    expect(outputData.category).toBe('drink');
    expect(outputData.size).toBe('short');
    expect(outputData.price).toBe(300);
  });
});