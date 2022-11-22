const { encode, decode } = require('./encodeAndDecode');

describe('Testa as funções encode e decode', () => {
  test('Testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('Testa se a função encode converte as vogais "a, e, i, o, u" para os números "1, 2, 3, 4"', () => {
    expect(encode('aeiou')).toBe('12345');
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });

  test('Testa se a função decode converte os números "1, 2, 3, 4" para as vogais "a, e, i, o, u"', () => {
    expect(decode('12345')).toBe('aeiou');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  test('Testa se os outros números e letras não são convertidos pelas funções', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const codedAlphabet = '1bcd2fgh3jklmn4pqrst5vwxyz';
    const numbers = '0123456789';
    const decodedNumbers = '0aeiou6789';

    expect(encode(alphabet)).toBe(codedAlphabet);
    expect(decode(codedAlphabet)).toBe(alphabet);

    expect(encode(decodedNumbers)).toBe(numbers);
    expect(decode(numbers)).toBe(decodedNumbers);
  });

  test('Testa se as funções retornam um resultado com o mesmo número de caractéres que o argumento passado', () => {
    const string1 = 'alphaBet';
    const string2 = 'B2t4';

    expect(encode(string1).length).toBe(string1.length);
    expect(decode(string2).length).toBe(string2.length);
  });
})