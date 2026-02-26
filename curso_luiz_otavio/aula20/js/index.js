function main() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  //   form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //     console.log(1);
  //   };

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;
    const paragrafo = document.createElement("p");

    pessoas.push({
      nome: nome,
      sobrenome: sobrenome,
      peso: peso,
      altura: altura,
    });

    paragrafo.textContent = `Pessoa: ${nome} ${sobrenome} ${peso} ${altura}`;
    resultado.appendChild(paragrafo);
    console.log(pessoas);
  }

  form.addEventListener("submit", recebeEventoForm);
}

main();
