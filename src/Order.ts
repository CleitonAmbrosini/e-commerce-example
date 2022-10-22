import CPF from './CPF';
import Item from './Item';

export default class Order {
  itens: Array<Item> = [];
  total = 0;

  constructor(readonly orderCPF: string) {
    const customerCPF = new CPF(orderCPF);
    customerCPF.validate();
  }

  addItem(item: Item): void {
    this.itens.push(item);
    this.total += item.price;
  }

  applyDiscountInPercentage(discount: number): void {
    const percent = discount / 100;
    const discountTotal = this.total * percent;
    this.total = Number((this.total - discountTotal).toFixed(2));
  }

  getTotal(): number {
    return this.total;
  }

  getItens(): Array<Item> {
    return this.itens;
  }
}
