const users = ['Mauricio', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name:'Mauricio',
        age: 40,
        gender: gender.MAN
    },
    {
        name:'Pedro',
        age:43,
        gender: gender.MAN
    },
    {
        name:'Jennifer',
        age: 18,
        gender:gender.WOMAN
    }
        
    
];
//retornar a quantidade de itens de um array
console.log('Itens:', persons.length);