console.log("Logical Operator With Or ||");

const idadeComprador = 15;
const estaAcompanhado = false;
const passagemComprada = false;
const listaDestino = Array(
    `Tokyo`,
    `Kyoto`,
    `Osaka`,
    `Nara`,
)

console.log(idadeComprador < 18);
console.log(idadeComprador > 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);

console.log(listaDestino);

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log(idadeComprador);
    console.log(estaAcompanhado);
    listaDestino.splice(3, 1);
    console.log("Compra aprovada");
    console.log(listaDestino);
}
else {
    console.log(idadeComprador);
    console.log(estaAcompanhado);
    console.log("Comprador menor de idade desacompanhado");
    console.log(listaDestino);
}

console.log("Embarque: \n\n");
if((idadeComprador >= 18 || estaAcompanhado) && passagemComprada){
    console.log("Boa Viagem!");
}
else{
    console.log("Retorne a bilheteria!");
}