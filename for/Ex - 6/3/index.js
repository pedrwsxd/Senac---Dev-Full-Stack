/* 
Construir um programa no qual o usuário digitará um número e o programa 
fará a contagem regressiva deste número, até o número zero.
*/
let nume = parseInt(prompt("Digite um numero maior que 0 "));

for (let num = nume; num>= 0; num--){
    document.write(`${num} <br>`);
}
