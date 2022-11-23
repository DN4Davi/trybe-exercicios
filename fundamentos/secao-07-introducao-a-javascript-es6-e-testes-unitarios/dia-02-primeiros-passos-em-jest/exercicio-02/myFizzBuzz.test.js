const myFizzBuzz = require('./myFizzBuzz');

test('Testa se a função myFizzBuzz funciona como o esperado', () => {
  expect(myFizzBuzz(15)).toBe("fizzbuzz");
  expect(myFizzBuzz(9)).toBe("fizz");
  expect(myFizzBuzz(25)).toBe("buzz");
  expect(myFizzBuzz(8)).toBe(8);
  expect(myFizzBuzz('batata')).toBe(false);
})