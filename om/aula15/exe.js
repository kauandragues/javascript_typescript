const numero = Number(prompt("Digite o seu número:"));

document.getElementById('numero-titulo').innerHTML = `${numero}`;

document.getElementById('texto').innerHTML = `
<p>A raiz quadrada: ${numero ** 1 / 2} </p>
<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>
<p>É NaN? ${Number.isNaN(numero)} </p>
<p>Arredondando para baixo: ${Math.floor(numero)} <br></p>
<p>Arredondando para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;