
let conceito = prompt("Digite o conceito A, PA ou NA (em letra maiuscula): ");

switch (conceito) {
   case "A":
         alert("Aprovado!");
      break;
   case "PA":
         alert("Recuperação!");
      break;
   case "NA":
         alert("Reprovado!");
   default:
      alert("Conceito Invalido!");
      break;
}

