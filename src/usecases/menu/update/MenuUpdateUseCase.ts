import { MenuUpdateOutputData } from './MenuUpdateOutputData';
import { MenuUpdateInputData } from './MenuUpdateInputData';
import { Category, ICategoryRepository } from '../../../entities/models/categories';
import { Menu, MenuSize, MenuFactory, IMenuFactory, IMenuRepository, ISizeRepository, MenuId } from '../../../entities/models/menus';
import { MenuService } from '../../../entities/services/MenuService';

export class MenuUpdateUseCase {
  #categoryRepository: ICategoryRepository;
  #sizeRepository: ISizeRepository;
  #menuRepository: IMenuRepository;

  constructor(
    categoryRepository: ICategoryRepository,
    sizeRepository: ISizeRepository,
    menuRepository: IMenuRepository
    ) {
    this.#categoryRepository = categoryRepository;
    this.#sizeRepository = sizeRepository;
    this.#menuRepository = menuRepository;
  }

  async handle(inputData: MenuUpdateInputData): Promise<MenuUpdateOutputData> {
    const menuId: MenuId = new MenuId(inputData.id);
    const menu = this.#menuRepository.findById(menuId);
    return new MenuUpdateOutputData(

    );
  }
}
