import Beer from './Beer';

export default class FreightCalculator {
  static MINIMAL_DISTANCE = 1000;
  static MINIMAL_FREIGHT_VALUE = 10;

  static getFreight(beer: Beer) {
    console.log('volume: ', beer.getVolume());
    console.log('desidade: ', beer.getDensity());

    const freightValue =
      this.MINIMAL_DISTANCE * beer.getVolume() * (beer.getDensity() / 100);

    return freightValue < this.MINIMAL_FREIGHT_VALUE
      ? this.MINIMAL_FREIGHT_VALUE
      : parseFloat(freightValue.toFixed(2));
  }
}
