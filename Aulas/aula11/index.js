/*
*Aritméticos
*Adição / concatenação ( - * /)
* **Potenciação
* % Resto da divisão
* precedência (),  **, * , / , %, + e - no final.
* operadores de incremento e decremento ** & --
*/
const num1 = 5;
const num2 = parseInt('10'); // o parseInt converte a string  em número inteiro;
const num3 = parseFloat('5.2'); // o parFloat converte o numero string em numero float.
console.log(num1+num2);
console.log(num1**num2);//Pontenciação
console.log(num1 % num2);// resto da divisão

let contador = 1;
const passo = 2;
//contador = contador + passo;
contador += passo;

console.log(contador);