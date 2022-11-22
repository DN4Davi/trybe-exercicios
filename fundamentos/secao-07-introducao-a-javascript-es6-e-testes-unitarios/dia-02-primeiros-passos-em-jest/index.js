const myRemove = require("./exercicio-01/myRemove");
const myFizzBuzz = require("./exercicio-02/myFizzBuzz")
const {encode, decode} = require('./exercicio-03/encodeAndDecode');
const techList = require("./exercicio-04/techList");

console.log(myRemove([1, 2, 3, 4], 1));
console.log(myFizzBuzz(15));
console.log(decode(encode('batata')));
console.log(techList(['Javascript', 'React', 'Java'], 'Davi'));