const [sum, {printMessage}] = [require('./exercicio-01/sum'), require('./exercicio-02/printMessage')];

console.log(sum(4, 5));
console.log(printMessage({personagem: 'rei'}));