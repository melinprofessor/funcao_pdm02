//Todo função precisa ser iniciada
//Com a palavra function
// Toda função que não possuir a palavra return
// Esta função é do tipo void
// Qualquer função pode receber parametros
function exemplo(inicio, fim) {

    // aqui é todo código que será executado
    // quando esta função ser chamada
    //...codigo
}

// for (let x = 0; x <= 10; x++) {
//     for(let y = 0; y <= 10; y++)
//     {
//      console.log(`${x} x ${y} = ${x * y}`)
//     }
//  }

// Função sem retorno
// Tipo void
function tabuda(inicio, fim) {
    for(inicio; inicio <= fim; inicio++) {
        for(let x =0; x <= 10; x++) {
            console.log(`${inicio} x ${x} = ${inicio * x}`)
        }
    }
}

console.log(tabuda(1,2))
console.log(tabuda(3,4))
console.log(tabuda(5,7))
console.log(tabuda(8,10))