let matriz = [[], [], [], []];

let valor = 1;
for (let lin=0; lin < 4; lin++){
    for (let col=0; col<3; col++){
        matriz[lin][col] = valor;
        valor++
    }
}

console.log(matriz);