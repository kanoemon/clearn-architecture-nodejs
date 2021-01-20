import { MenuCreateInputData } from '../usecases/menu/create/MenuCreateInputData';
import { MenuCreateOutputData } from '../usecases/menu/create/MenuCreateOutputData';
import { MenuCreateUseCase } from '../usecases/menu/create/MenuCreateUseCase';

export class MenuController {
  createMenu(request): MenuCreateOutputData {
    const inputData = new MenuCreateInputData(
      request.name,
      request.description,
      request.category,
      request.size,
      request.price
    );
    const usecase = new MenuCreateUseCase();
    return usecase.handle(inputData);
  }
}
