let num1, num2, num3;
num1 = parseInt(prompt("valor 1"));
num2 = parseInt(prompt("valor 2"));
num3 = parseInt(prompt("valor 3"));
if (num1<num2 && num1<num3){
    document.write(num1+",");
    if (num2<num3){
        document.write(num2+",");
        document.write(num3+",");
    } else if (num3 < num2){
        document.write(num3+",");
        document.write(num2+",");
    } else {
        document.write("valores iguais entre o segundo e o terceiro");
    }
} else if (num2<num1 && num2<num3){
    document.write(num2+",");
    if (num1<num3){
        document.write(num1+",");
        document.write(num3+",");
    } else if (num3 < num1){
        document.write(num3+",");
        document.write(num1+",");
    } else {
        document.write("valores iguais entre o primeiro e o terceiro");
    }
} else if (num3<num1 && num3<num2){
    document.write(num3+",");
    if (num1<num2){
        document.write(num1+",");
        document.write(num2+",");
    } else if (num2 < num1){
        document.write(num2+",");
        document.write(num1+",");
    } else {
        document.write("valores iguais entre o primeiro e o terceiro");
    }
} else {
    document.write("todos os valores são");
}