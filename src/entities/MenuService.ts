import { IMenuRepository } from "./IMenuRepository";
import { Menu } from "./Menu";

export class MenuService {
  #menuRepository: IMenuRepository;

  constructor(menuRepsitory: IMenuRepository) {
    this.#menuRepository = menuRepsitory;
  }

  async isExists(menu: Menu): Promise<boolean> {
    const id = await this.#menuRepository.findIdByName(menu.name);
    return id ? true : false;
  }
}
