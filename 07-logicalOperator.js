console.log("Logical Operator");

const idadeComprador = 18;
const estaAcompanhado = true;
const listaDestino = Array(
    `Tokyo`,
    `Kyoto`,
    `Osaka`,
    `Nara`,
)

console.log(listaDestino);

if (idadeComprador >= 18) {
    console.log(idadeComprador);
    console.log("Compra aprovada");
    listaDestino.splice(2, 1);
    console.log(listaDestino);
}
else {
    if (estaAcompanhado) {
        console.log(idadeComprador);
        console.log("Comprador menor de idade");
        console.log(estaAcompanhado);
        listaDestino.splice(3, 1);
        console.log(listaDestino);
    } else {
        console.log(idadeComprador);
        console.log("Comprador menor de idade desacompanhado");
        console.log(estaAcompanhado);
        console.log(listaDestino);
    }
}

console.log(idadeComprador < 18);
console.log(idadeComprador > 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
