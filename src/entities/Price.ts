export class Price {
  #price: number;

  constructor(price: number) {
    this.#price = price;
  }

  get price(): number {
    return this.#price;
  }
}
