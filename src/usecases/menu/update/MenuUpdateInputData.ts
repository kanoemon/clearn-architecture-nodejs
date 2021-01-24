export class MenuUpdateInputData {
  #id: number;
  #name: string | null;
  #description: string | null;
  #category: string | null;
  #size: string | null;
  #price: number | null;

  constructor(id: number, name: string | null, description: string | null, category: string | null, size: string | null, price: number | null) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#category = category;
    this.#size = size;
    this.#price = price;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string | null {
    return this.#name;
  }

  get description(): string | null {
    return this.#description;
  }

  get category(): string | null {
    return this.#category;
  }

  get size(): string | null {
    return this.#size;
  }

  get price(): number | null {
    return this.#price;
  }
}
