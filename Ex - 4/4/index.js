//Construir um programa onde um vendedor irá digitar quanto ele vendeu em um mês na loja. Caso esse total de vendas seja maior ou igual a R$ 100.000,00, 
//o programa irá calcular uma comissão de 4% sobre suas vendas, mas caso a venda seja menor, o programa calculará apenas 2%.

let vendas = parseFloat(prompt(`Digite o salário do cliente:`));

if ( vendas >= 100000 ) {
    let calculo = vendas * 0.04;
    alert(`A comissão é de: ${calculo }`);
} else {
    let calculo = vendas * 0.02;
    alert(`A comissão é de: ${calculo1}`);
} 