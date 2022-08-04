soma = 0;
var media;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(index=0; index<numbers.length; index+=1) {
    soma += numbers[index]
}
media = soma/numbers.length
if(media > 20){
    console.log("Valor da média:", media, " -> Portanto é maior que 20.")
}   else if (media <= 20) {
    console.log("Valor da média:", media, "Portanto é menor ou igual à 20.")
}

