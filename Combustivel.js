// Preço da gasolina
// Preço do alcool
// resultado = alcool / gasolina
// resultado < 0.7

const calcular = (gasolina, alcool) => {
    const media = alcool / gasolina;
    return media
}

const media = calcular(4.55,2.49)

if(media < 0.7) {
    console.log('Vai de alcool');
}else {
    console.log('Vai de gasolina');
}