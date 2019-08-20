function somar(numero1, numero2) {
    const resultado = numero1 + numero2;
    return resultado;
}

function multiplicar(numero1, numero2) {
    const resultado = numero1 * numero2;
    return resultado;
}

function dividir(numero1, numero2) {
    const resultado = numero1 / numero2;
    return resultado;
}


// Toda variavel criada dentro da função
// Só fica visivel no escopo local 
// (somente dentro da função)
// Esta função possuir retorno
function subtrair(numero1, numero2) {
    const resultado = numero1 - numero2;
    return resultado;
}

function calcular(numero1, numero2, operador) {
    let resultado = 0;

    if(operador === '+') {
        resultado = somar(numero1,numero2);
    } else if (operador ==='-') {
        resultado = subtrair(numero1,numero2);
    } else if (operador ==='*') {
        resultado = multiplicar(numero1,numero2);
    } else if (operador ==='/') {
        resultado = dividir(numero1,numero2);
    } else {
        resultado = 'Operador não encontrado!';
    }

    return resultado;
}

console.log(calcular(10,10, '*'));


function calcularRefatorada(numero1, numero2, operador) {
    return eval(`${numero1} ${operador} ${numero2}`);
}

console.log(calcularRefatorada(10,10,'*'))