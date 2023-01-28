/* eslint-disable no-unused-vars */
import CPF from './CPF';
import Beer from './Beer';
import Coupon from './Coupon';
import OrderItem from './OrderItem';
import FreightCalculator from './FreightCalculator';

export default class Order {
  private orderItems: OrderItem[];
  private customerCPF: CPF;
  private coupon?: Coupon;
  private freight = 0;

  constructor(
    readonly orderCPF: string,
    readonly orderDate: Date = new Date(),
  ) {
    this.customerCPF = new CPF(orderCPF);
    this.orderItems = [];
  }

  addItem(item: Beer, quantity: number): void {
    if (this.existItemInList(item.getId()))
      throw new Error('Item already exists in the order.');
    this.orderItems.push(new OrderItem(item.id, item.price, quantity));
    this.freight += FreightCalculator.getFreight(item) * quantity;
  }

  existItemInList(itemId: number): boolean {
    return this.orderItems.some(
      (orderItem) => orderItem.getIdItem() === itemId,
    );
  }

  applyDiscount(discountCoupon: Coupon): void {
    this.coupon = discountCoupon;
  }

  getTotal(): number {
    let totalValue = this.orderItems.reduce((total, item) => {
      total += item.getTotal();
      return total;
    }, 0);

    if (this.coupon) {
      totalValue -= this.coupon.getDiscount(totalValue);
    }
    totalValue += this.freight;
    return parseFloat(totalValue.toFixed(2));
  }

  getItens(): Array<OrderItem> {
    return this.orderItems;
  }
}
