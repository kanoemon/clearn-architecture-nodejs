import { IMenuRepository } from "./IMenuRepository";

export class MenuService {
  #menuRepository: IMenuRepository;

  constructor(menuRepsitory: IMenuRepository) {
    this.#menuRepository = menuRepsitory;
  }

  isExists(): boolean {
    return false;
  }
}
