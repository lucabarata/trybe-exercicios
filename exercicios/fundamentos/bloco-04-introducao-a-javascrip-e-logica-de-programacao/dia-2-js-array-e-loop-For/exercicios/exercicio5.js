var maior = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(index=0; index < numbers.length; index+=1) {
    if(numbers[index]>maior) {
        maior = numbers[index]
    }
}
console.log("O maior valor da lista é", maior, ".")