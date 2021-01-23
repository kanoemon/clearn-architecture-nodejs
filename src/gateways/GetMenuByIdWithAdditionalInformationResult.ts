import { IGetMenuByIdWithAdditionalInformationResult } from "../usecases/menu/shared/IGetMenuByIdWithAdditionalInformationResult";

export class GetMenuByIdWithAdditionalInfomationResult implements IGetMenuByIdWithAdditionalInformationResult {
  readonly #menuId: number;
  readonly #menuName: string;
  readonly #menuDescription: string;
  readonly #categoryName: string;
  readonly #sizeName: string;
  readonly #price: number;

  constructor(
    menuId: number,
    menuName: string,
    menuDescription: string,
    categpryName: string,
    sizeName: string,
    price: number
  ) {
    this.#menuId = menuId;
    this.#menuName = menuName;
    this.#menuDescription = menuDescription;
    this.#categoryName = categpryName;
    this.#sizeName = sizeName;
    this.#price = price;
  }

  get menuId(): number {
    return this.#menuId;
  }

  get menuName(): string {
    return this.#menuName;
  }

  get menuDescription(): string {
    return this.#menuDescription;
  }

  get categoryName(): string {
    return this.#categoryName;
  }

  get sizeName(): string {
    return this.#sizeName;
  }

  get price(): number {
    return this.#price;
  }
}
