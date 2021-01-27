import { MenuRepository } from "./MenuRepository";
import { SizeRepository } from "./SizeRepository";
import { CategoryRepository } from "./CategoryRepository";
import { IMenuRepository } from "../entities/models/menus";
import { ISizeRepository } from "../entities/models/sizes";
import { ICategoryRepository } from "../entities/models/categories";

export class SQLiteUnitOfWork {
  #menuRepository;
  #sizeRepository;
  #categoryRepository;

  constructor() {

  }

  menuRepository(): IMenuRepository {
    if (!this.#menuRepository) {
      this.#menuRepository = new MenuRepository();
    }
    return this.#menuRepository;
  }

  sizeRepository(): ISizeRepository {
    if (!this.#sizeRepository) {
      this.#sizeRepository = new SizeRepository();
    }
    return this.#sizeRepository;
  }

  categoryRepository(): ICategoryRepository {
    if (!this.#categoryRepository) {
      this.#categoryRepository = new CategoryRepository();
    }
    return this.#categoryRepository;
  }

  save() {

  }
}
