export class MenuId {
  #value: number;

  constructor(size: number) {
    this.#value = size;
  }

  get value(): number {
    return this.#value;
  }
}
