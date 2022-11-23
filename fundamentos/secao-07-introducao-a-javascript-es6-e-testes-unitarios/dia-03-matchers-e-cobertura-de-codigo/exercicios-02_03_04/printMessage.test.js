const { info, printMessage } = require('./printMessage')

describe('Testa a funcionalidade da função printMessage',() => {
  test('Testa se o objeto passado como parâmetro da função tem a propriedade "personagem"', () => {
    expect(info).toHaveProperty('personagem');
  });

  test('Testa se a função exibe a mensagem correta', () => {
    expect(printMessage(info)).toMatch(/^Boas\svindas,\s/);
    const regexWithVariable = new RegExp(`${info.personagem}$`);
    expect(printMessage(info)).toMatch(regexWithVariable);
  });

  test('Testa se a função lança uma mensagem de erro quando o argumento não possui a propriedade "personagem"', () => {
    expect(() => {printMessage({player: 'Davi'})}).toThrow(Error)
  });
});