/*
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz); */

/*
let matriz =  new Array(3);
    matriz[0] = [1, 2, 3];
    matriz[1] = [4, 5, 6];
    matriz[2] = [7, 8, 9];
console.log(matriz[0][0]); */

let matriz = [[], [], []];

let valor = 1;
for (let lin=0; lin < 3; lin++){
    for (let col=0; col<3; col++){
        matriz[lin][col] = valor;
        valor++
    }
}

console.log(matriz);