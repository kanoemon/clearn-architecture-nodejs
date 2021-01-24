import { SizeId } from "./SizeId";

export class Size {
  #id: SizeId;
  #name: string;

  constructor(id: SizeId, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get id(): SizeId {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }
}
