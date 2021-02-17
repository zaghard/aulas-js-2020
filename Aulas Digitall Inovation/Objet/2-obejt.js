const user = {
    name: 'Mauricio',
    lastName: 'Gonzaga Almeida'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista  de propriedades e valores:', Object.entries(user));

//Mergear propriedades de um objeto.
Object.assign(user, {fullName: 'Mauricio Gonzaga Almeida'});

console.log('\nAdiciona a propriedade fullname no objeto user', user);
console.log('\nRetorna um novo objeto mergeado dois ou mais objetos', Object.assign({}, user, {age: 40}));

//Previne todas as alterações em um objeto.
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto.
 const person = { name: 'Mauricio'};
 Object.seal{person};

 person.name = 'Mauricio Gonzaga';
 delete person.name;
 person.age = 40;
 console.log('\n Variável person após as alterações:', person);