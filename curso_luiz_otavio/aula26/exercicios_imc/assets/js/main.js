function main() {
    const form = document.querySelector("form");
    const resultado = document.querySelector(".resultado");
    const paragrafo = document.createElement("p");

    function descobrirCategoria(imc) {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc < 25) return "Peso normal";
        if (imc < 30) return "Sobrepeso";
        if (imc < 35) return "Obesidade grau 1";
        if (imc < 40) return "Obesidade grau 2";
        if (imc >= 40) return "Obesidade grau 3";
        return "Algo deu errado!";
    }

    function validarInputs(peso, altura) {
        paragrafo.textContent = "ERRO: "
        let validacao = true;

        if (peso === "") {
            paragrafo.textContent += '(Peso não preechido) '
            validacao = false;
        } else if (peso <= 0 || peso > 635 || isNaN(peso)) {
            paragrafo.textContent += ' (Peso inválido) '
            validacao = false;
        }

        if (altura === "") {
            paragrafo.textContent += '(Altura não preenchida) '
            validacao = false;
        } else if (altura <= 0.6 || altura > 2.51 || isNaN(altura)) {
            paragrafo.textContent += ' (Altura inválida) ';
            validacao = false;
        }

        return validacao;
    }


    function recebeEventoForm(evento) {
        evento.preventDefault();
        resultado.innerHTML = "";

        const inputPeso = document.querySelector("#input-peso").value;
        console.log(inputPeso);

        const inputAltura = document.querySelector("#input-altura").value;
        console.log(inputAltura);

        if (!validarInputs(inputPeso, inputAltura)) {
            paragrafo.classList.add('resultado-erro');
            resultado.appendChild(paragrafo);
            return;
        }

        const imc = inputPeso / inputAltura ** 2;
        console.log(`Calculado imc: ${imc.toFixed()}`);

        const categoriaImc = descobrirCategoria(imc);
        console.log(`Calculado categoria do IMC: ${categoriaImc}`);

        paragrafo.classList.add('resultado-sucesso');
        paragrafo.textContent = `Seu IMC é ${imc.toFixed(1)} (${categoriaImc})`;
        console.log(`String completa do resultado: ${paragrafo.textContent}`);
        resultado.appendChild(paragrafo);
    }

    form.addEventListener("submit", recebeEventoForm);
}

main();
