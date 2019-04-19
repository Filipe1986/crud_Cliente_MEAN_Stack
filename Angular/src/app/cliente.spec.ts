import { Cliente } from './cliente';

describe('Cliente', () => {
  it('Deve criar uma instância', () => {
    expect(new Cliente('Filipe', 'Esteves', '27/11/1986', '125.069.457-41', '2571-5112')).toBeTruthy();
    console.log()
  });
});

