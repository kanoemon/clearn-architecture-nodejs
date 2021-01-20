export class Category {
  #category: string;

  constructor(category: string) {
    this.#category = category;
  }

  get category(): string {
    return this.#category;
  }
}
