// #1 Arrays

let carros = ["palio 98", "toro", "uno", 10, 11, 1.99999, new Date()];
// Arrays em js pode guardar qualquer tipo de dado

console.log('Array criado: ' + carros);
console.log('Tamanho do array: ' + carros.length);
console.log('Primeiro elemento: ' + carros[0]);
console.log('Último elemento: ' + carros[carros.length - 1]);

// Como arrow function
carros.forEach((value, index) => {
    console.log(`>> Elemento ${index + 1}: ${value}`);
}
);

// Como função anônima
carros.forEach(function(value, index){
    console.log(`>> Elemento ${index + 1}: ${value}`);
});


/**
 * Com o forEach, é possível passar automaticamente para dentro da função
 * o valor do elemento do array e o seu índice, um por vez à cada repetição.
 */