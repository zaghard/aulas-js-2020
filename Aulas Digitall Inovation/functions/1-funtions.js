// Declaração mais antinga de funções.
function fn() {
    return 'Code here';
}

//Declaração de funções com a implatação do ES6.
const arrowFn = ( ) => 'Code here';
const arrowFn2 = ( ) => {
    //Mais de uma expressão
    return 'Code here'; 
}

//Funções também são objetos.
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log(fn.prop);

//Recebr parámetros
const logValues = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);