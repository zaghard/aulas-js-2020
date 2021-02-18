const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual a symbol2:',symbol1 === symbol2);

//Previnir conflito entre nomes de prooriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1] : 'Mauricio',
    [nameSymbol2] : 'Gonzaga',
    lastName: 'Gonzaga Almeida'

}
console.log(user);

//Symbols criam propriedades que nao saõ enumberables
for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log('\nValor da chave ${key}: ${user[key]}');
    }
}