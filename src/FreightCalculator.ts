import Item from './Item';

export default class FreightCalculator {
  static getFreight(item: Item) {
    const freight = 1000 * item.getVolume() * (item.getDensity() / 100);
    return freight < 10 ? 10 : parseFloat(freight.toFixed(2));
  }
}
