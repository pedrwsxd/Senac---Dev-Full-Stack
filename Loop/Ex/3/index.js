/*  Construir um programa que leia a nota dos alunos de uma turma.
 Ao final informar a soma de todas as notas. A saída do programa será quando o usuário digitar "fim". */
 
 let continua = prompt("Digite fim para sair").toLowerCase();
 let nota, soma = 0;

while (continua != "fim") { 
    
    nota = parseFloat(prompt("Digite a nota: "));
    soma += nota;
    continua = prompt("Digite fim para sair").toLowerCase();
}

document.write(`A soma das notas é ${soma} <br> `);

