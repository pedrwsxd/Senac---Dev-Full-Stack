let verificar;
let qtd = 0;
document.write(`Quantidade de numeros maiores que 5: <br>`);

for (let i = 0; i <= 5; i++) {

    verificar = parseInt(prompt("Digite um numero: "))
    
    if (verificar > 5) {
       qtd++;
    } 
}