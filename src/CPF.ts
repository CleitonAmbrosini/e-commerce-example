export default class CPF {
  newCPF: string;
  arrayCPF: Array<number>;
  firstDigit: number;
  secondDigit: number;

  constructor(readonly cpf: string) {
    this.cleanCPF(cpf);
    this.convertToArrayOfNumber();
    this.firstDigit = this.obtainDigit(this.arrayCPF.slice(0, 9), 10);
    this.secondDigit = this.obtainDigit(this.arrayCPF.slice(0, 10), 11);
  }

  private cleanCPF(cpf: string): void {
    this.newCPF = cpf.replace(/\D/g, '');
  }

  private convertToArrayOfNumber(): void {
    this.arrayCPF = this.newCPF.split('').map((character) => {
      return Number(character);
    });
  }

  private obtainDigit(arrayCPF: Array<number>, multiplier: number): number {
    const sumOfDigits = arrayCPF.reduce((acc, valor) => {
      const sum = acc + valor * multiplier;
      multiplier--;
      return sum;
    }, 0);
    return (sumOfDigits * 10) % 11;
  }

  validate() {
    if (!this.correctLenght()) throw new Error('Invalid CPF length.');
    if (!this.checkDigits()) throw new Error('Invalid CPF');
    return true;
  }

  private correctLenght(): boolean {
    return this.newCPF.length === 11;
  }

  private checkDigits(): boolean {
    return (
      this.arrayCPF[9] === this.firstDigit &&
      this.arrayCPF[10] === this.secondDigit
    );
  }
}
