export class SizeId {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  get value(): number {
    return this.#value;
  }
}
