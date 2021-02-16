//retorn o tamanho de uma string
const textSize = 'Texto'.length;
console.log('Quantidade de letras:',textSize);

//Retorna um array quebrando a string por uma delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Texto, txeT');
console.log('\nSubstituição de valor:', replacedText);

//Retorna  a 'Fatia' de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allwithouLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:',allwithouLastChar);

const secoundToEnd = 'Texto'.slice(1);
console.log('\nValor da string segunda letra até a última:', secoundToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);