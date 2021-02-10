let varA = 'A';//recebe C.
let varB = 'B'; // recebe A.
let varC = 'C';//Recebe B.

/*const varATemp = varA
varA = varB;
varB = varC;
varC = varATemp;*/

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);