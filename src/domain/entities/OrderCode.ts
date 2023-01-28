export default class OrderCode {
  MAX_SIZE_ORDER_SEQUENTIAL = 8;
  code: string;

  constructor(readonly date: Date, readonly sequential: number) {
    this.createCode(date.getFullYear(), sequential);
  }

  private createCode(year: number, sequential: number): void {
    const orderSequential = this.createOrderSequential(
      this.convertToString(sequential),
    );
    this.code = `${year}${orderSequential}`;
  }

  private convertToString(value: number): string {
    return String(value);
  }

  private createOrderSequential(sequential: string): string {
    const sequentialArr = this.convertToArrayOfString(sequential);
    const emptyArray: Array<string> = [];
    for (
      let i = 0;
      i < this.MAX_SIZE_ORDER_SEQUENTIAL - sequentialArr.length;
      i++
    ) {
      emptyArray[i] = '0';
    }
    emptyArray.push(...sequentialArr);
    return emptyArray.join('');
  }

  private convertToArrayOfString(value: string): Array<string> {
    return Array.from(value);
  }

  getCode() {
    return this.code;
  }
}
