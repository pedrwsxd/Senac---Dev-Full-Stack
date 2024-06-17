let cont = prompt("digite fim para sair").toLowerCase();
let nota=0, soma = 0;
while (cont != "fim"){
 nota = parseFloat(prompt("digite a nota"));
 soma += nota;
 cont = prompt("digite fim para sair").toLowerCase();
}