import { Category } from "./Category";
import { MenuSize } from "./MenuSize";

import { Price } from './Price';

export class Menu {
  #name: string;
  #description: string;
  #category: Category;
  #size: MenuSize;
  #price: Price;

  constructor(
    name: string,
    description: string,
    category: Category,
    size: MenuSize,
    price: Price
  ) {
    this.#name = name;
    this.#description = description;
    this.#category = category;
    this.#size = size;
    this.#price = price;
  }
}
