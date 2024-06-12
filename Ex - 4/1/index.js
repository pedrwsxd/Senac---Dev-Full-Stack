// Construir uma página para uma empresa de serviços. O operador irá digitar o salário de um cliente. Se o salário for maior que R$ 3.000,00, 
// o programa irá escrever na tela “Oferecer Plano Alfa” e, caso seja menor, o programa escreverá “Oferecer Plano Beta”.

let salário = parseFloat(prompt(`Digite o salário do cliente:`));

if ( salário > 3000) {
    alert(`Oferecer Plano Alfa`);
} else {
    alert(`Oferecer Plano Beta`);
}