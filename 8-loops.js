console.log("\n Trabalhando com Loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\n Destinos possíveis :`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos == destino) {
        console.log("Destino Existe");
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe, ocorreu um erro");
}

for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}