import { CategoryId } from "./CategoryId";

export class Category {
  #id: CategoryId;
  #name: string;

  constructor(id: CategoryId, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get id(): CategoryId {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }
}
