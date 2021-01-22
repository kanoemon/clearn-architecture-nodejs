import { Category } from "./Category";
import { MenuId } from "./MenuId";
import { MenuSize } from "./MenuSize";
import { Price } from './Price';

export class Menu {
  #id: MenuId;
  #name: string;
  #description: string;
  #category: Category;
  #size: MenuSize;
  #price: Price;

  constructor(
    id: MenuId,
    name: string,
    description: string,
    category: Category,
    size: MenuSize,
    price: Price
  ) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#category = category;
    this.#size = size;
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

  get category(): Category {
    return this.#category;
  }

  get size(): MenuSize {
    return this.#size;
  }

  get price(): Price {
    return this.#price;
  }
}
