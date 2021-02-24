let recebe = [gets(),gets(),gets(),gets(), gets()];
let par = 0;
let impar = 0;
let positivos = 0;
let negativos = 0;

for(let recebe = 0; n < recebe.length; n++){
  if( recebe % 2 == 0){
    par = par +1;
  }
  
   if( n % 2 !== 0){
    impar=impar+1;
  }
  if( recebe[n]>0){
    positivos=positivos +1;
  }
  if( recebe[n]< 0){
    negativos=negativos +1;
  }
}

console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");