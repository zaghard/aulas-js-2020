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

//Receber parámetros
const logValues = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retorna funções no ES6
/*const controlFnExec => fnParam => allowed => {
    if(allowed) {
        fnParam( );
    }
}
*/
const handleFnExcution = controlFnExec(fn);

handleFnExcution(true); //Executará a função fn.
handleFnExcution( ); //Não executará a função fn.

// controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam( );
        }
    }
}