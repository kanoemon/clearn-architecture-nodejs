import { CategoryRepository } from '../gateways/CategoryRepository';
import { SizeRepository } from '../gateways/SizeRepository';
import { MenuCreateInputData } from '../usecases/menu/create/MenuCreateInputData';
import { MenuCreateOutputData } from '../usecases/menu/create/MenuCreateOutputData';
import { MenuCreateUseCase } from '../usecases/menu/create/MenuCreateUseCase';

export class MenuController {
  async createMenu(request): Promise<MenuCreateOutputData> {
    const inputData = new MenuCreateInputData(
      request.name,
      request.description,
      request.category,
      request.size,
      request.price
    );
    const usecase = new MenuCreateUseCase(
      new CategoryRepository(),
      new SizeRepository()
    );
    return await usecase.handle(inputData);
  }
}
