import { MenuDeleteOutputData } from './MenuDeleteOutputData';
import { MenuDeleteInputData } from './MenuDeleteInputData';
import { Menu, IMenuRepository, MenuId } from '../../../entities/models/menus';

export class MenuDeleteUseCase {
  #menuRepository: IMenuRepository;

  constructor(
    menuRepository: IMenuRepository
    ) {
    this.#menuRepository = menuRepository;
  }

  async handle(inputData: MenuDeleteInputData): Promise<MenuDeleteOutputData> {
    const menuId: MenuId = new MenuId(inputData.id);
    const menu: Menu | null = await this.#menuRepository.findById(menuId);
    if (menu === null) throw new Error('menu not found');

    await this.#menuRepository.remove(menu);

    return new MenuDeleteOutputData(
      menu.id.value
    );
  }
}
