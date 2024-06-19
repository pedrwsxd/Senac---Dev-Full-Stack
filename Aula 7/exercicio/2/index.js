let qtdf = 0, qtdm = 0, idade;
let sexo;
for (let x=0; x<10;x++){
    idade = parseInt(prompt("idade"));
    sexo  = prompt("sexo (f/m)").toLowerCase();
    if (sexo == "f"){ qtdf += idade; }
    else if (sexo =="m") { qtdm += idade; }
    else {alert("sexo inválido");}
}
document.write("soma feminina: "+qtdf + "<br>");
document.write("soma masculina: "+qtdm);