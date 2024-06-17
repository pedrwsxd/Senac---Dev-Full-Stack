/* 1. O usuário de uma página de games deverá digitar sua pontuação. 
Caso digite um valor acima de 1.000, o programa retornará o texto “Usuário VIP” ou, caso contrário, 
“Aumente sua pontuação para se tornar um usuário VIP”. */


let pontuacao = parseInt(prompt("Digite a pontuação: "));

pontuacao>1000 ? alert("Usuário VIP"): alert("Aumente sua pontuação para se tornar um usuário VIP");