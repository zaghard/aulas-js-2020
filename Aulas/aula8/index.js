//Exercicio

const nome = 'Mauricio';
const sobrenome = 'Gonzaga';
const idade = 41;
const peso = 110;
const alturaEmM = 1.80;
let imc; //peso /(altura*altura)
let anoNascimento;

anoNascimento = 2021 - idade;
imc =  peso / (alturaEmM*alturaEmM);
console.log(imc);
console.log(anoNascimento);
console.log(nome, sobrenome, 'tem',idade, 'anos');
console.log('Tem', alturaEmM, 'de altura e sei IMC é de', imc);
console.log( nome,sobrenome,'nasceu em', anoNascimento, '.')

//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);