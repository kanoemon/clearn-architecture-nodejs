import { MenuCreateInputData } from '../usecases/menu/create/MenuCreateInputData';
import { MenuCreateUseCase } from '../usecases/menu/create/MenuCreateUseCase';

export class MenuController {
  createMenu(request) {
    const inputData = new MenuCreateInputData(request);
    const usecase = new MenuCreateUseCase();
    usecase.handle(inputData);
  }
}
