import { MenuId } from "./MenuId";
import { SizeId } from "../sizes";
import { Price } from './Price';
import { CategoryId } from '../categories';

export class Menu {
  #id: MenuId;
  #name: string;
  #description: string;
  #sizeId: SizeId;
  #categoryId: CategoryId;
  #price: Price;

  constructor(
    id: MenuId,
    name: string,
    description: string,
    sizeId: SizeId,
    categoryId: CategoryId,
    price: Price
  ) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#sizeId = sizeId;
    this.#categoryId = categoryId;
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

  get categoryId(): CategoryId {
    return this.#categoryId;
  }

  get price(): Price {
    return this.#price;
  }

  changeName(name: string) {
    this.#name = name;
  }
}
