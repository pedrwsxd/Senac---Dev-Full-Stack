/* A escola Lemos Segundo gostou do sistema que você desenvolveu e, com isso, pediu um “upgrade”. Aproveitando o código
do exercício anterior, eles solicitaram que, no caso de o estudante ficar em recuperação, o programa deverá solicitar a digitação de mais uma nota.
 Se essa nota for menor que 5, o programa escreverá “Reprovado na Recuperação” e, caso contrário, “Aprovado na Recuperação”. */



 let nota = parseFloat(prompt(`Digite a nota do aluno: `));

 if ( (nota < 0) || (nota > 10) ){
    
    alert(`Nota Invalida`);
   
 } else if ( ( nota >= 0 ) && ( nota < 4 ) ) {

    alert(`Aluno reprovado`);

 } else if ( ( nota >= 4 ) && ( nota < 7 ) ) {

    alert(`Aluno em recuperação`);
    
    let notaRecuperacao = parseFloat(prompt(`Digite a nota da recuperaçaõ do aluno: `));

   if (notaRecuperacao < 5) {
    
    alert(`Reprovado na recuperação`);

   } else {

    alert(`Aprovado na recuperação`);

   }

 } else if ( nota >= 7) {

    alert(`Aluno aprovado`);

 } else {
    
    alert(`Insira algum valor.`);

 }