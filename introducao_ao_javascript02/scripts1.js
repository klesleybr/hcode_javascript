// # 1 Funções

function somar(x1, x2){
    return x1 + x2;
}

var soma = somar(2, 1);
console.log(soma); // log: 3


// Sabendo disso, é possível criar uma calculadora:

console.log('Tentativa 1:')

function calculadora(n1, n2, operador){
    return (`${n1} ${operador} ${n2}`);
}

var operacao = calculadora(4, 1, '+');
console.log(operacao); // log: 4 + 1

/**
 * Retornou uma string...
 * Como queremos que seja feita a operação 4 + 1, faremos outra função
 * que conterá uma função: eval()
 */

console.log('Tentativa 2:');

function calculadoraCerta(n1, n2, operador){
    return eval((`${n1} ${operador} ${n2}`));
}

operacao = calculadoraCerta(4, 1, '+');
console.log(operacao); // log: 5

console.log(calculadoraCerta(2, 3, '-')); // log: -1

/**
 * A função evaluation ou eval(STRING arg0) serve para avaliar uma string
 * a fim de verificar se é possível codificá-la e executá-la como instrução.
 */




// #1.1 Funções anônimas

// é aquela função que não possui nome.
// uma função anônima só é chamada uma única vez: no momento de sua criação

(function (n1, n2, operador){
    console.log(
      eval((`${n1} ${operador} ${n2}`))
    );

    // return eval((`${n1} ${operador} ${n2}`));
}) (4, 3, '*');

// esta é a única vez que a função executa. Depois, ela "some".
/**
 * Veja que depois de colocar a estrutura da função, passamos, entre parênteses,
 * os parâmetros para a função executar.
 * ====================================
 * (
 *  aqui fica a estrutura da função
 * ) (aqui ficam os parâmetros);
 * ====================================
 */



// #1.2 Arrow function

// Uma forma mais resumida de escrever uma função

var calculadoraArrow = (n1, n2, operador) => {

    return eval((`${n1} ${operador} ${n2}`));

}

var resultado = calculadoraArrow(4, 2, '/');
console.log('Gerado por arrow function: ' + resultado);

/**
 * veja que é como se estivéssemos salvando uma função numa variável.
 */