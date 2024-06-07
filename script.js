function realizarCalculo() {
    // Obtém os valores dos inputs
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado;

    // Verifica a operação e realiza o cálculo
    if (operacao === 'soma') {
        resultado = numero1 + numero2;
    } else if (operacao === 'subtracao') {
        resultado = numero1 - numero2;
    } else if (operacao === 'multiplicacao') {
        resultado = numero1 * numero2;
    } else if (operacao === 'divisao') {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = 'Erro: Divisão por zero';
        }
    }

    // Exibe o resultado abaixo do ícone
    let elementoResultado = document.getElementById('result');
    elementoResultado.textContent = 'Resultado: ' + resultado;
}
