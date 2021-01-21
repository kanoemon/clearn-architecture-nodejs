export class Category {
  #id: number;
  #category: string;

  constructor(id: number, category: string) {
    this.#id = id;
    this.#category = category;
  }

  get id(): number {
    return this.#id;
  }

  get category(): string {
    return this.#category;
  }
}
