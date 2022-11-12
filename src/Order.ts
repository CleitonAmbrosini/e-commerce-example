import CPF from './CPF';
import Item from './Item';
import Coupon from './Coupon';

export default class Order {
  itens: Array<Item> = [];
  total = 0;
  customerCPF: CPF;

  constructor(readonly orderCPF: string) {
    this.customerCPF = new CPF(orderCPF);
  }

  addItem(item: Item): void {
    this.itens.push(item);
    this.total += item.price;
  }

  applyDiscountInPercentage(discountCoupon: Coupon): void {
    if (!discountCoupon.isExpired()) {
      const discont = this.total * discountCoupon.getPercentage();
      this.total -= parseFloat(discont.toFixed(2));
    }
  }

  getTotal(): number {
    return this.total;
  }

  getItens(): Array<Item> {
    return this.itens;
  }
}
