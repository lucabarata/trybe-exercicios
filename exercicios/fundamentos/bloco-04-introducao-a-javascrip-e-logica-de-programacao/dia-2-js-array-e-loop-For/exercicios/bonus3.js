var numbersMult = []
var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(index=0; index<numbers.length; index+=1) {
    var number = numbers[index] * numbers[index+1]
    numbersMult.push(number)
}
console.log(numbersMult)

console.log(35*27)