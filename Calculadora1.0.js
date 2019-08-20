const somar  = (numero1, numero2) => {
    const resultado = numero1 + numero2;
    return resultado;
}

const multiplicar  = (numero1, numero2) => {
    const resultado = numero1 * numero2;
    return resultado;
}
const dividir  = (numero1, numero2) => {
    const resultado = numero1 / numero2;
    return resultado;
}
const subtrair  = (numero1, numero2) => {
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