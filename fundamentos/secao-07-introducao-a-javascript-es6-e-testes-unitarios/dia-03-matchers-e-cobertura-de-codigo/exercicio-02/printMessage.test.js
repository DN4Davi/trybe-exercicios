const {info, printMessage} = require('./printMessage')

test('Testa se o objeto passado como parâmetro da função tem a propriedade "personagem"', () => {
  expect(info).toHaveProperty('personagem')
})