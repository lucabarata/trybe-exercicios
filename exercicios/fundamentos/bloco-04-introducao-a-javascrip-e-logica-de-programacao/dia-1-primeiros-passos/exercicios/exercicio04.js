const a = -9;
const as = Math.sign(a)
switch(as) {
    case 1:
        console.log("O valor é positivo")
        break
    case -1:
        console.log("O valor é negativo")
        break
    case +0 || -0:
        console.log("O valor é nulo")
        break
}