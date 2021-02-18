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
console.log('Propridades do objeto user:', Object.keys(user));
console.log('valores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto.
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto.
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

//Cria um enum.
const direction = {
    UP : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT : Symbol( 'RIGHT' )

};