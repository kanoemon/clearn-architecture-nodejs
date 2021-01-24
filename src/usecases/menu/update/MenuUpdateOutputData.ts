export class MenuUpdateOutputData {
  #name: string;
  #description: string;
  #category: string;
  #size: string;
  #price: number;

  constructor(name: string, description: string, category: string, size: string, price: number) {
    this.#name = name;
    this.#description = description;
    this.#category = category;
    this.#size = size;
    this.#price = price;
  }

  get name(): string {
    return this.#name;
  }
  get description(): string {
    return this.#description;
  }

  get category(): string {
    return this.#category;
  }

  get size(): string {
    return this.#size;
  }

  get price(): number {
    return this.#price;
  }
}
