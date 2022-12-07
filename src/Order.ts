/* eslint-disable no-unused-vars */
import CPF from './CPF';
import Item from './Item';
import Coupon from './Coupon';
import OrderItem from './OrderItem';

export default class Order {
  orderItems: OrderItem[];
  customerCPF: CPF;
  coupon: Coupon;
  freight = 0;

  constructor(
    readonly orderCPF: string,
    readonly orderDate: Date = new Date(),
  ) {
    this.customerCPF = new CPF(orderCPF);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number): void {
    if (this.existItemInList(item.getId()))
      throw new Error('Item already exists in the order.');
    this.orderItems.push(new OrderItem(item.id, item.price, quantity));
    this.calculateFreight(item);
  }

  existItemInList(itemId: number): boolean {
    return this.orderItems.some(
      (orderItem) => orderItem.getIdItem() === itemId,
    );
  }

  applyDiscount(discountCoupon: Coupon): void {
    this.coupon = discountCoupon;
  }

  calculateFreight(item: Item): void {
    this.freight += 1000 * item.getVolume() * (item.getDensity() / 100);
  }

  getTotal(): number {
    let totalValue = this.orderItems.reduce((total, item) => {
      total += item.getTotal();
      return total;
    }, 0);

    if (this.coupon) {
      totalValue = parseFloat(
        (totalValue - this.coupon.getDiscount(totalValue)).toFixed(2),
      );
    }
    return totalValue;
  }

  getItens(): Array<OrderItem> {
    return this.orderItems;
  }

  getFreight(): number {
    return this.freight < 10 ? 10 : this.freight;
  }
}
