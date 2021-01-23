import { MenuSizeId } from "./MenuSizeId";

export class MenuSize {
  #id: MenuSizeId;
  #name: string;

  constructor(id: MenuSizeId, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get id(): MenuSizeId {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }
}
