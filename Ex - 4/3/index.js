//Construir um programa onde um vendedor irá digitar quanto ele vendeu em um mês na loja. Caso esse total de vendas seja maior ou igual a R$ 100.000,00, 
//o programa irá calcular uma comissão de 4% sobre suas vendas, mas caso a venda seja menor, o programa calculará apenas 2%.

let vendas = parseFloat(prompt(`Digite o valor da venda:`));
let calculo;

if ( vendas >= 100000 ) {
    calculo = vendas * 0.04;
    
} else {
    calculo = vendas * 0.02;
    
} 

alert(`O valor da comissão é: R$${calculo.toFixed(2)}`);