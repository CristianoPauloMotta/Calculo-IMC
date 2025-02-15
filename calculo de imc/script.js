function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultadoDiv = document.getElementById('resultado');
    // parseFloat() converte a string recebida como argumento e a retorna como um número de ponto flutuante. Este método se comporta de maneira idêntica a da função global parseFloat e é parte da especificação ECMAScript 6 (seu propósito é a modularização dos objetos globais)
    // isNaN é uma sigla em inglês que significa "Not a Number" (não é um número). É um valor especial usado em linguagens de programação para representar um valor numérico indefinido ou irrepresentável. 
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = '<p class="text-danger">Por favor, insira valores válidos.</p>';
        return;
    }

    // variavel para calcular o IMC!
    let imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    resultadoDiv.innerHTML = `<p class="text-success">Seu IMC é ${imc} - ${classificacao}</p>`;
}
