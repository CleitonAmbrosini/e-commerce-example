import CPF from '../../src/domain/entities/CPF';

const CPFsWithSameDigit = [
  '000.000.000-00',
  '111.111.111-11',
  '222.222.222-22',
  '333.333.333-33',
  '444.444.444-44',
  '555.555.555-55',
  '666.666.666-66',
  '777.777.777-77',
  '888.888.888-88',
  '999.999.999-99',
];

const validCPFs = ['471.418.290-08', '59914676090'];

describe('CPF tests', () => {
  it.each(validCPFs)('Should validate a CPF', (value) => {
    const cpf = new CPF(value);
    expect(cpf).toBeDefined();
  });

  it('Should return error if CPF does not have 11 digits', () => {
    expect(() => new CPF('872.535.120-5')).toThrowError(
      new Error('Invalid CPF.'),
    );
  });

  it('Should return error if CPF is not valid', () => {
    expect(() => new CPF('473.009.880-30')).toThrowError(
      new Error('Invalid CPF.'),
    );
  });

  it.each(CPFsWithSameDigit)(
    'Should return error if all digits are equal',
    (cpf) => {
      expect(() => new CPF(cpf)).toThrowError(new Error('Invalid CPF.'));
    },
  );

  it('Should return error if CPF is empty', () => {
    expect(() => new CPF('')).toThrowError(new Error('Invalid CPF.'));
  });
});
