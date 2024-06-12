let salario = parseFloat(prompt("Digite o valor do seu salário:"));
let aumento = salario * 0.15; // 15% de aumento
let novoSalario = salario + aumento;
alert("Novo Salário: R$ " + novoSalario.toFixed(2));  