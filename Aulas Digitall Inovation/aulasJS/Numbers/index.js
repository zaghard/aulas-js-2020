const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log(' Número transformado em string: ',typeof numberAsString);

//Retorna número com um número de casas décimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//Transforma uma string em um float.
console.log('\nString parseada para Float:', parseFloat('13.22'));

//Tranforma uma String em um Int.
console.log('\n String parseada para Int:',parseInt('13.20'));


//Null
const nullVariable = null;

console.log(typeof nullVariable);