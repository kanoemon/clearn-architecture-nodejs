import { MenuId } from "./MenuId";
import { SizeId } from "../sizes";
import { Price } from './Price';

export class Menu {
  #id: MenuId;
  #name: string;
  #description: string;
  #sizeId: SizeId;
  #price: Price;

  constructor(
    id: MenuId,
    name: string,
    description: string,
    sizeId: SizeId,
    price: Price
  ) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#sizeId = sizeId;
    this.#price = price;
  }

  get id(): MenuId {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get description(): string {
    return this.#description;
  }

  get sizeId(): SizeId {
    return this.#sizeId;
  }

  get price(): Price {
    return this.#price;
  }
}
