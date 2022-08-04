var impares = []
let numbers = [70, 8, 100, 2, 3];
for(index=0; index < numbers.length; index+=1) {
    if(numbers[index] % 2 == 1) {
        impares.push(numbers[index])
    }
}
if(impares == 0) {
    console.log("Não existe nenhum valor ímpar!")
} else {
    console.log("Os valores ímpares são: ", impares)
}

