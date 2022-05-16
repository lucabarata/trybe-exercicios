var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(index1=1; index1<numbers.length; index1+=1) {
    for(index0=0; index0<index1; index0+=1) {
        var troca = 0
        if(numbers[index0]>numbers[index1]) {
            troca = numbers[index1]
            numbers[index1] = numbers[index0]
            numbers[index0] = troca
        }

    }
}
for(number of numbers) {
    console.log(number)
}
