const sum = require('./sum');

describe('Testando a função sum', () => {
  test('Testa se a função retorna o valor esperado quando os parâmetros são números.', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  test('Testa se a função lança um erro quando um dos parâmetros não é um número', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });

  test('testa se a mensagem de erro é a esperada quando um dos parâmetros não é número', () => {
    expect(() => {sum(4, '5')}).toThrow(new Error('parameters must be numbers'));
  })
})