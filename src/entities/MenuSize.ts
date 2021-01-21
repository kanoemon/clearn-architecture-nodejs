export class MenuSize {
  #id: number;
  #size: string;

  constructor(id: number, size: string) {
    this.#id = id;
    this.#size = size;
  }

  get id(): number {
    return this.#id;
  }

  get size(): string {
    return this.#size;
  }
}
