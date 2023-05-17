console.log ("List");

const listaDestino = Array (
    `Tokyo`,
    `Kyoto`,
    `Osaka`,
    `Nara`,
)

console.log (listaDestino);

listaDestino.push(`Hiroshima`);

console.log (listaDestino);

listaDestino.splice(1,1);

console.log (listaDestino);

console.log (listaDestino[0], listaDestino[3]);