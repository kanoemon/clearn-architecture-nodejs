export class MenuGetInputData {
  #id: number;

  constructor(id: number) {
    this.#id = id;
  }

  get id(): number {
    return this.#id;
  }
}
