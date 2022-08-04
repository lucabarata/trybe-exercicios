const a = 90
const b = 0
const c = 45
const s = a + b + c


if(a<=0||b<=0||c<=0) {
    console.log("Ângulo inválido.")
}
if(s < 180 || s > 180) {
    console.log("Não é possível formar um triângulo")
}
if(s==180) {
    console.log("É possível formar um triângulo")
}


// switch(s) {
//     case 180:
//         console.log("É possível formar um triângulo")
//         break
//     case !180:
//         console.log("Não é possível formar um triângulo")
//         break
// }