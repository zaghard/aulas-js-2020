const nome = 'fofao';  //string
const nome1 = 'Mauricio'; //string
const nome2 = 'Cris'; //string
const num1 = 10;
const num2 = 10.52;
let nomeAluno; // undefinned = não aponta para local nenhuma na memoria
let sobrenomeAluno = null; //nulo
const aprovado = false; //Boolean = true e false (lógico)

console.log(typeof num1); //typeof para ver o tipo de variavel.

const a = [1,2];
const b = a;
console.log(a, b);
b.push(3)
console.log(a,b);