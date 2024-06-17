/* Um parque de diversões pediu para você montar um script onde o operador de um brinquedo irá digitar a altura de uma criança. 
Caso a altura seja menor que 1.20 metros, 
o programa retornará a mensagem “Acesso apenas para crianças com mais de um metro e vinte”, caso contrário, “Acesso liberado”. */


let altura = parseFloat(prompt("Digite a altura: "));

altura<1.20 ? alert("Acesso apenas para crianças com mais de um metro e vinte"): alert("Acesso liberado");