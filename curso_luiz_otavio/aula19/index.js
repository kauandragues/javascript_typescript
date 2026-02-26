/*
Copiam os valores (Primitivos) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

let nome = "Kauã";
nome = "Otávio"; // é possivel trocar o valor (por não ser const), mas não é possivel alterar o valor
nome[1] = "R"; // não é possivel fazer isso pq não é possivel alterar a variavel
// console.log(nome);
// console.log(nome[0]);

//--------------------------------------------------------------------------------------
let a = "A";
let b = a; // Cópia o valor, mas as variáveis são independentes
// Valores primitivos copiam os valores

// console.log(a, b);

// a = "Outra coisa";
// console.log(a, b);

// ---------------------------------------------------------------

let a1 = [1, 2, 3];
let b1 = a1; // aponta para o mesmo lugar de a1, dados mutáveis são passados como referência
let c1 = [...a1]; // uma maneira de copiar os valores, mas serem variáveis independentes
console.log(a1, b1, c1);
a1.push(4);
console.log(a1, b1, c1);

// ------------------------------------------------------------------------
const pessoa = {
  nome: "Kauã",
  sobrenome: "Andrade",
};

const pessoa2 = pessoa;
pessoa.nome = "Felipe";
console.log(pessoa, pessoa2); // apontam para o mesmo lugar na memória
