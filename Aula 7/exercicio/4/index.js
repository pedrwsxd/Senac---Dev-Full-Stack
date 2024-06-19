/* . Monte um programa para ler o nome e o setor (adm, log, inf) de uma empresa, 
e ao final escrever a quantidade de funcionários em cada setor */

let nome, setor;
let qtd = 1, qtd_adm = 0, qtd_log = 0, qtd_inf = 0;
let func = parseInt(prompt("Informe a qtd de funcionarios"));
while (qtd <= func) {
    nome = prompt("Informe o nome");
    setor = prompt("Informe o setor (adm / log / inf) ").toLowerCase();
    if ( setor == "adm" ) { 
        qtd_adm++;
    } else if ( setor == "log" ) { 
        qtd_log++;
    } else if ( setor == "inf" ) { 
        qtd_inf++;
    } else {
        alert ("Setor invalido");
    }
    qtd++;
}

document.write (`Adm = ${qtd_adm} <br> Log = ${qtd_log} <br> Inf = ${qtd_inf}`);