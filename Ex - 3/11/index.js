let salario = parseFloat(prompt("Digite o valor do seu salário:"));
let descontoVT = salario * 0.06; // 6% de vale-transporte
let descontoINSS = salario * 0.08; // 8% de INSS
let salarioLiquido = salario - descontoVT - descontoINSS;

let resultado = "Desconto Vale-Transporte: R$ " + descontoVT.toFixed(2) + "\n" +
                "Desconto INSS: R$ " + descontoINSS.toFixed(2) + "\n" +
                "Salário Líquido: R$ " + salarioLiquido.toFixed(2);

alert(resultado);