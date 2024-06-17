/* 4. Construir um programa no qual o usuário 
digitará um número e o programa fará a tabuada de multiplicação deste número.
*/

let num = parseInt(prompt("Digite um numero"));

for (let i=1; i<=10; i++){
    document.write(`${num} x ${i} = ${num * i} <br>`);
}
