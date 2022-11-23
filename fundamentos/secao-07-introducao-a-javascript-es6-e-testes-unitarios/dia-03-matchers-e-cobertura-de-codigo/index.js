const [sum, {printMessage}, searchEmployee] = [require('./exercicio-01/sum'), require('./exercicios-02_03_04/printMessage'), require('./exercicio-bonus/searchEmployee')];

console.log(sum(4, 5));
console.log(printMessage({personagem: 'rei'}));
console.log(searchEmployee('4678-2', 'firstName'));