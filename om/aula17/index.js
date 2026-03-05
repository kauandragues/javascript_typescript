function saudacao(nome) {
  return `Bom dia ${nome}`;
}
// funções em JS retornam undefined se não for dito o que ela deve retornar

// saudacao("Luiz");
// saudacao("Kaundragues");
// saudacao("Maria");

// const variavel = saudacao("Pedro");
// console.log(variavel);

console.log(saudacao("Pedro"));
// ---------------------------------------------------------
let resultado = 12312312;

function soma(x = 1, y = 1) {
  let resultado = x + y;
  return resultado;
}

resultado = soma(4, 2);
// console.log(resultado);
// ---------------------------------------------

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));

// ----------------------------------------------

const raiz2 = (args) => {
  return args ** 0.5;
};

console.log(raiz2(25));

const raiz3 = (args) => args ** 0.5;
console.log(raiz3(36));
