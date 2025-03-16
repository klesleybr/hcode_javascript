// # 1 Saída de texto e comentários

// Para escrever, pode-se usar aspas simples ou duplas.
console.log('Olá, mundo!'); // Escreve no console/terminal do navegador

alert("Olá mundo!"); // Cria uma caixa de texto na tela, como um aviso

// Javascript é case sensitive: alert() != Alert()


// Isso é um comentário
/*
    Isso é um comentário de bloco
*/


// #2 Variáveis

var olaMundo = "Olá, mundo!";
console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);

/*
    Declaramos variáveis por escopo:
    -> var = variável, considerada em todo o código;
    -> let = variável, considerada apenas no bloco de código em que foi declarada;
    -> const = constante, valor fixo.
*/

/*
    São ainda variáveis no js:
    -> number: números;
    -> string: conjunto de caracteres;
    -> array: conjunto de valores;
    -> boolean: true ou false
    -> function #
*/

// typeOf() = exibe o tipo || <variavel> instanceOf <classe> = exibe se é uma
// instância da classe ou não (boolean)
console.log(olaMundo instanceof Date); // false
console.log(olaMundo instanceof String); // false
console.log(typeof olaMundo); // string
console.log(typeof(1.2)); // number -> variáveis com número são do tipo NUMBER


// O js é fracamento tipado. Você pode mudar o tipo de variável ao longo do código.


// #3 Operadores

/*
    Js possui uma especificidade quanto ao operador relacional de igualdade.
    Note que: 
        x == y --> ele compara se os VALORES das variáveis são iguais;
        x === y --> ele compara se os VALORES e os TIPOS das variáveis são iguais;
*/

let a = 10; // number
const b = "10"; // string
const c = 10;
var d = 9;

console.log(a == b); // true
console.log(a === b); // false

console.log(a == c); // true
console.log(a === c); // true

console.log(a == d); // false
console.log(a === d); // false

// O operador de desigualdade segue a mesma lógica:
// != compara apenas valores, enquanto !== compara valores e tipos.

/**
 * Os operadores lógicos são representados:
 * && = and lógico
 * || = or lógico
 */

console.log(a !== b && a == b); // true


// #4 Controle de fluxo de código - condicional e switch-case

let cor = 'amarelo';

if(cor === 'verde') {
    console.log('siga');
} else if(cor === 'amarelo') {
    console.log('atenção!');
} else if(cor === 'vermelho') {
    console.log('pare');
}


/**
 * Use o switch-case quando souber quais são exatamente as suas opções
 */

cor = 'verde';

switch(cor){
    case 'verde':
        console.log('siga');
        break;
    case 'amarelo'        :
        console.log('atenção');
        break;
    case 'vermelho':
        console.log('pare');
        break;
    default:
        console.log('cor inválida!');
        break;
}



// #5 Controle de fluxo de código - repetição

/**
 * Para repetição, é possível usar as seguintes estruturas:
 * -> for
 * -> foreach = percorre arrays
 * -> for in = percorre outra coisa
 * -> while
 * -> do while
 * 
 * E ainda pode-se usar estruturas condicionais com break e continue.
 * 
 * 
 */

let n = 9;

for(let i = 0; i <= 10; i++){
    console.log(`>> TABUADA: ${n} x ${i} = ${n * i}`);
}

// O uso de dupla crase torna possível misturar strings e variáveis/constantes.
// Mas é possível fazer concatenação usando o +

console.log('Eu sou texto, mas' + ' isto aqui é variável: ' + n);