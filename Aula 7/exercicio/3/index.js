/* Monte um programa para ler um número, 
contar desse número mais 10 (exemplo: 30 --> 40) e informar a soma dos números pares dentro do intervalo */
let num = parseInt(prompt("Digite um número:"));
let soma = num + 10;
let par = 0;

for (let i = num; i <= soma ; i++) {
 
    if (i % 2 == 0){
       par += i;
    } 

}

document.write(`A soma dos números pares são: ${par}`);