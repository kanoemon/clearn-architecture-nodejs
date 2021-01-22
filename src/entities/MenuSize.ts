export class MenuSize {
  #value: string;

  constructor(size: string) {
    this.#value = size;
  }

  get value(): string {
    return this.#value;
  }
}
