let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var menor = numbers[0]
for(index=0; index < numbers.length; index+=1) {
    if(numbers[index]< menor) {
        menor = numbers[index]
    }
}
console.log("Menor número: ", menor)