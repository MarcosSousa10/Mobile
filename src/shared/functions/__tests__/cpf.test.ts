/* eslint-disable prettier/prettier */
import {insertMaskInCpf, validateCpf} from '../cpf';
const CPF_INVALI = '0205654061';
const CPF_INVALID = '02056540614';
const CPF_WITH_MASK = '020.565.406-14';
describe('CPF', () => {

  it('should insert mask in cpf', () => {
    expect(CPF_WITH_MASK).toEqual(insertMaskInCpf(CPF_INVALID));
  });
  it('should invalid cpf', () => {

    expect(false).toEqual(validateCpf(CPF_INVALI));
  });
});
