import { IMenuRepository } from "./IMenuRepository";
import { Menu } from "./Menu";

export class MenuService {
  #menuRepository: IMenuRepository;

  constructor(menuRepsitory: IMenuRepository) {
    this.#menuRepository = menuRepsitory;
  }

  isExists(menu: Menu): boolean {
    const id = this.#menuRepository.findIdByName(menu.name);
    return id ? true : false;
  }
}
