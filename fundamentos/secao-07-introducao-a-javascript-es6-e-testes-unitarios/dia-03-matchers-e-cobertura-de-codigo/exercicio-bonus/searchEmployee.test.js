const searchEmployee = require('./searchEmployee');

describe('Testa a funcionalidade da função searchEmployee', () => {
  test('Testa se searchEmployee existe e é uma função', () => {
    expect(searchEmployee).toBeDefined();
    expect(typeof searchEmployee).toBe('function')
  });

  test('Testa se ao receber o id de um funcionário e uma informação a ser consultada, retorna a informação consultada do funcionário', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('firstName: Paul');
  });

  test('Testa se a função retorna o erro "ID não identificada" caso a id passada não exista', () => {
    expect(() => {searchEmployee('0000-0', 'firstName')}).toThrow(new Error("ID não identificada"));
  });

  test('Testa se a função retorna o erro "Informação indisponível" caso a informação passada não exista', () => {
    expect(() => {searchEmployee('4678-2', 'midName')}).toThrow(new Error("Informação indisponível"));
  });
})