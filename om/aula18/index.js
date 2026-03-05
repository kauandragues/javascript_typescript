/*
Objetos
*/

const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
};

// console.log(pessoa1.nome);
// ----------------------------------------
function criaPessoa1(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa1 = criaPessoa1("Kauã", "Andrade", 20);
console.log(pessoa1);
// -----------------------------------------------
function criaPessoa2(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}
const pessoa2 = criaPessoa2("Pedro", "Pereira", 34);
console.log(pessoa2);
// -----------------------------------------------
const criaPessoa3 = (nome, sobrenome, idade) => {
  return { nome, sobrenome, idade };
};
const pessoa3 = criaPessoa3("Maria", "Souza", 41);
console.log(pessoa3);
// ----------------------------------------------
const pessoa4 = {
  nome: "Felipe",
  sobrenome: "Rodrigues",
  idade: 16,

  fala() {
    console.log(`${this.nome} está falando oi`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

console.log(pessoa4);
pessoa4.incrementaIdade();
console.log(pessoa4);
pessoa4.fala();
