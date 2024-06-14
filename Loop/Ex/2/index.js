/* Construir um programa no qual o usuário digitará um número e o programa fará a contagem regressiva deste número, até o número zero. */

let contador = parseInt(prompt("Digite o valor: ")); 

while (contador >= 0) {
    
    document.write(`${contador} <br> `);
    contador--;
}
