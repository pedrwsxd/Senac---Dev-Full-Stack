/* Criar uma página na qual a saída dela é a tabuada de multiplicação de 5 (utilizar o comando FOR).
Exemplo de saída:
5x1 = 5
5x2 = 10
5x3 = 15
5x4 = 20
5x5 = 25
5x6 = 30
5x7 = 35
5x8 = 40
5x9 = 45
5x10 = 50 
*/

let num = 5;

for (let i=1; i<=10; i++){
    document.write(`${num} x ${i} = ${num * i} <br>`);
}
