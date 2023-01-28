/* eslint-disable no-unused-vars */
export default class OrderItem {
  constructor(
    readonly idItem: number,
    readonly priceItem: number,
    readonly quantity: number,
  ) {
    if (this.quantity <= 0)
      throw new Error('Quantity of the item cannot be negative.');
  }

  getTotal(): number {
    return this.priceItem * this.quantity;
  }

  getIdItem(): number {
    return this.idItem;
  }
}
