// #4.1 Continuidade das estruturas de repetição

let n = 2;

for(let i = 0; i <= 10; i++){
    console.log(`${n} x ${i} = ${n * i}`)
}

// É possível usar o for com identação apenas, sem o uso de chaves.

// O do... while tem estrutura semelhante ao C e ao Java...
n = 0;
do {
    console.log(`>> Iteração com do while: ${n}`);
    n++; // é possível usar n += 1;
} while(n < 5);


// O while tem estrutura semelhante ao C e ao Java...
n = 0;
while(n < 5){
    console.log(`>> Iteração com while: ${n}`);
    n += 1;
}

/**
 * É possível usar palavras de controle para parar uma iteração ou reinicializá-la.
 */

n = 3
while(true){    
    console.log(`Valor de n: ${n}`);
    n --;

    if(n < 0)
        break;    
}
console.log('Iteração finalizada.');

/**
 * O continue reseta a iteração. Ele deixe de executar a instrução seguinte
 * e volta para a verificação da condição do laço.
 */

n = 0;
while(true){
    if(n % 2 === 0){
        n ++;
        continue;
    }
    if(n > 10){
        break;
    }

    console.log(`>> Valor de n: ${n}`);

    n ++;
}
console.log('Iteração finalizada.');


/**
 * O for in é usado para percorrer as propriedades de um objeto.
 */

console.log('Uso do for in, exemplo: ');
let arrayNumerico = [10, 11, 12, 13, 14];

for(let i in arrayNumerico){
    console.log(i); // log: 0, 1, 2, 3, 4 [propriedas]
}

/**
 * Já o for of é ideal para objetos iterativos (como arrays), pois
 * itera sobre os valores do objeto e não sobre as propriedades.
 */

console.log('Uso do for of, exemplo:');
for(let i of arrayNumerico){
    console.log(i); // log: 10, 11, 12, 13, 14 [valores]
}


/**
 * Há ainda um método .forEach() que permite executar uma função para cada
 * elemento de um array.
 */

var somatorio = 0;
console.log(`>> Somatório antes: ${somatorio}`);

function soma(numero){
    somatorio += numero;
}

var numeros = [3, 4, 10, 20];
numeros.forEach(soma);

console.log(`>> Somatório depois: ${somatorio}`);
