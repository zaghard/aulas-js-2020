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

//Verifica se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});
//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

//Retorna um novo
const personsWithCourse = persons.map( person =>{
    person.course = 'Introdução ao Javascript';
    return person;

})