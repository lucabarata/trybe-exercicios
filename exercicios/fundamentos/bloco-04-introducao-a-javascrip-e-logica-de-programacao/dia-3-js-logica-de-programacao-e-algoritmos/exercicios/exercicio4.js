// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

numerosPrimos = []
numerosCompostos = []
for(index=2; index<=50; index+=1) {
    for(divisor=2; divisor<index; divisor+=1){
        if(index % divisor == 0) {
            numerosCompostos.push(index)
            break;
        } else {
            numerosPrimos.push(index)
            break;
        }
    }
}
console.log(numerosCompostos)
console.log(numerosPrimos)
console.log("O maior número primo entre 1 e 50 é ", numerosPrimos[numerosPrimos.length-1])

// let primeNumber = 0;

// for (let index = 0; index <= 50; index += 1) {
//   let isPrime = true;
//   for (let counter = 2; counter < index; counter += 1) {
//       if (index % counter == 0) {
//           isPrime = false;
//           break;
//       }
//   }
//   if (index > 1 && isPrime && primeNumber < index) {
//       primeNumber = index;
//   }
// }

// console.log(primeNumber);