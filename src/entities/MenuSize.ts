export class MenuSize {
  #size: string;

  constructor(size: string) {
    this.#size = size;
  }

  get size(): string {
    return this.#size;
  }
}
