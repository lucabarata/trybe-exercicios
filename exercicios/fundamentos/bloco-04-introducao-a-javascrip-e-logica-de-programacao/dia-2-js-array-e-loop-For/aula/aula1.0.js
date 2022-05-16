var pizzas = ["4 Queijos", "Frango com Catupiry", "Marguerita", "Palmito", "Chocolate"];
pizzas.push("Peito de peru"); // adiciona no final
pizzas.unshift("Calabresa") // adc no inicio
console.log(pizzas[pizzas.length -1]) // Mostra o ultimo elemento da lista
pizzas.pop(); // remove ultimo
pizzas.shift() // remove primeiro
console.log(pizzas.indexOf('4 Queijos')); // indica indice
//console.log(pizzas.sort());
//console.log(pizzas[1]);
for(var index = 0; index<pizzas.length; index++) {
    console.log(pizzas[index]);
}

