import CPF from '../src/CPF';

describe('CPF tests', () => {
  it('Should return false if CPF does not have 11 digits', () => {
    const cpf = new CPF('872.535.120-5');
    expect(() => cpf.validate()).toThrowError(new Error('Invalid CPF length.'));
  });

  it('Should return true if CPF is valid', () => {
    const cpf = new CPF('759.751.130-24');
    expect(cpf.validate()).toBe(true);
  });

  it('Should return false if CPF is not valid', () => {
    const cpf = new CPF('473.009.880-30');
    expect(() => cpf.validate()).toThrowError(new Error('Invalid CPF'));
  });
});
