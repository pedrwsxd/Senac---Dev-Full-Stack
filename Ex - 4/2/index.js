// Construir um programa onde o usuário saberá o valor do seu colesterol. Caso o valor seja menor que 180,
//  o programa irá escrever na tela “Saúde Ok”; caso contrário, o programa escreverá na tela “Vamos procurar uma ajuda médica?” 

let colesterol = parseFloat(prompt(`Digite o salário do cliente:`));

if ( colesterol < 180 ) {
    alert(`Saúde Ok`);
} else {
    alert(`Vamos procurar uma ajuda médica?`);
}