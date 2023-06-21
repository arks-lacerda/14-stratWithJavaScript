// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!');

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numOne = 4;
const numTwo = 6;
function sum() {
  return `${numOne} + ${numTwo} = ${numOne + numTwo}`;
}
alert(sum(numOne, numTwo));

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const isNumber = 'Text';
if (typeof isNumber == 'number') {
  alert(`${isNumber} - É um número`);
} else {
  alert(`${isNumber} - Não é um número`);
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = 'Arthur Lacerda';
if (typeof isString == 'string') {
  alert(`${isString} - É uma string`);
} else {
  alert(`${isString} - Não é uma string`);
}

//Crie um script que declare uma variável e verifique se o seu valor é um boolean. Se for, exiba a mensagem "É um boolean", caso contrário, exiba a mensagem "Não é um boolean".
const isBoolean = false;
if (typeof isBoolean == 'boolean') {
  alert(`${isBoolean} - É um boolean`);
} else {
  alert(`${isBoolean} - É um boolean`);
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let subOne = 20;
let subTwo = 5;
function subtract() {
  return `${subOne} - ${subTwo} = ${subOne - subTwo}`;
}
alert(subtract(subOne, subTwo));

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let multOne = 7;
let multTwo = 5;
function multiply() {
  return `${multOne} * ${multTwo} = ${multOne * multTwo}`;
}
alert(multiply(multOne, multTwo));

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let divOne = 1000;
let divTwo = 5;
function divide() {
  return `${divOne} / ${divTwo} = ${divOne / divTwo}`;
}
alert(divide(divOne, divTwo));

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const isEvenNumber = 4;
if (isEvenNumber % 2 == 0) {
  alert(`${isEvenNumber} - É um número par`);
} else {
  alert(`${isEvenNumber} - Não é um número par`);
}

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isOddNumber = 5;
if (isOddNumber % 2 != 0) {
  alert(`${isOddNumber} - É um número ímpar`);
} else {
  alert(`${isOddNumber} - Não é um número ímpar`);
}
