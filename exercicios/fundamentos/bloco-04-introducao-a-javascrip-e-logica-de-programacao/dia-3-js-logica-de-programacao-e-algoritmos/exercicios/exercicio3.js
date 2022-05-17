// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
var maiorPalavra = array[0]
var mneorPalavra = array[0]
for(palavra of array) {
    if(palavra.length>maiorPalavra.length)  {
        maiorPalavra = palavra
    }
    if(palavra.length<mneorPalavra.length) {
        mneorPalavra = palavra
    }
}
console.log(maiorPalavra)
console.log(mneorPalavra)
