import CPF from './CPF';
import Item from './Item';
import Coupon from './Coupon';

export default class Order {
  itens: Array<Item> = [];
  total = 0;
  customerCPF: CPF;
  freight = 0;

  constructor(readonly orderCPF: string) {
    this.customerCPF = new CPF(orderCPF);
  }

  addItem(item: Item, quantity: number): void {
    if (quantity > 0 && !this.existItemInList(item.description)) {
      this.itens.push(item);
      this.calculateFreight(item);
      this.total += item.price * quantity;
    }
  }

  existItemInList(itemName: string): boolean {
    return this.itens.some((item) => item.description === itemName);
  }

  applyDiscountInPercentage(discountCoupon: Coupon): void {
    if (!discountCoupon.isExpired()) {
      const discont = this.total * discountCoupon.getPercentage();
      this.total -= parseFloat(discont.toFixed(2));
    }
  }

  calculateFreight(item: Item): void {
    this.freight += 1000 * item.getVolume() * (item.getDensity() / 100);
  }

  getTotal(): number {
    return parseFloat(this.total.toFixed(2));
  }

  getItens(): Array<Item> {
    return this.itens;
  }

  getFreight(): number {
    return this.freight < 10 ? 10 : this.freight;
  }
}
