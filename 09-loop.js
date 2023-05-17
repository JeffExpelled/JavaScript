console.log("Loop");

const idadeComprador = 18;
const estaAcompanhado = false;
const destinoDesejado = "Osaka";
const podeComprar = (idadeComprador >= 18 || estaAcompanhado) == true;
let passagemComprada = "";
let destinoExiste = false;
let contador = 0;

const listaDestino = Array(
    `Tokyo`,
    `Kyoto`,
    `Osaka`,
    `Nara`,
)

while (contador < 4) {
    if (listaDestino[contador] == destinoDesejado) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

if (podeComprar == true && destinoExiste == true){
    console.log("Destino existe");
}else{
    console.log("Entre em contato com o suporte");
}

for(let i = 0; i < 4; i++){
    if (listaDestino[i] == destinoDesejado) {
        destinoExiste = true;
    }
}

if (podeComprar == true && destinoExiste == true){
    console.log("Boa Viagem!");
}else{
    console.log("Erro 404");
}