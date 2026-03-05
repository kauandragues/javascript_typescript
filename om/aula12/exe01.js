let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let auxiliarA = varA;
varA = varB;
varB = varC;
varC = auxiliarA;

console.log(varA, varB, varC); 