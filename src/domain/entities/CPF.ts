export default class CPF {
  DIGIT_1_FACTOR = 10;
  DIGIT_2_FACTOR = 11;
  cpf: string;

  constructor(readonly value: string) {
    if (!this.isValid(value)) throw new Error('Invalid CPF.');
    this.cpf = value;
  }

  private isValid(value: string): boolean {
    const cleanCPF = this.removeNonDigits(value);
    if (!this.isInvalidLength(cleanCPF)) return false;
    if (this.isAllDigitsTheSame(cleanCPF)) return false;
    const lastDigits = cleanCPF.substring(9, 11);
    const digit1 = this.calculateDigit(cleanCPF, this.DIGIT_1_FACTOR);
    const digit2 = this.calculateDigit(cleanCPF, this.DIGIT_2_FACTOR);
    const calculatedCheckDigits = `${digit1}${digit2}`;
    return calculatedCheckDigits === lastDigits;
  }

  private removeNonDigits(value: string): string {
    return value.replace(/\D/g, '');
  }

  private isInvalidLength(cleanCPF: string): boolean {
    return cleanCPF.length === 11;
  }

  private isAllDigitsTheSame(cleanCPF: string): boolean {
    const [firstDigit] = cleanCPF;
    return [...cleanCPF].every(
      (digit: string) => digit === (cleanCPF as any)[firstDigit],
    );
  }

  private calculateDigit(cpf: string, factor: number): number {
    let total = 0;
    for (const digit of cpf) {
      if (factor > 1) {
        total += Number(digit) * factor--;
      }
    }
    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
  }
}
