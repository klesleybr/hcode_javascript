// #1 Manipulando a árvore DOM
// Documento Object Model, a forma como o html organiza seus elementos.

window.addEventListener('focus', event => {
    console.log('focus');
});

document.addEventListener('click', event => {
    console.log('click');
});

/**
 * Essa estrutura é comum de aparecer. Perceba que definimos:
 * - um alvo (no caso acima, window = janela e document = site em si);
 * - um evento relacionado ao alvo;
 * - o que será realizado quando o evento acontecer.
 */

// # 2 Computando datas no JS
let agora = Date.now(); // retorna o timestamp em milissegundos
console.log(agora);

agora = new Date(); // instância do objeto Date. Retorna o tempo em forma legível
console.log(agora);

// Você pode mostrar de forma mais intuitiva ainda:

let dia = agora.getDate();
let mes = agora.getMonth() + 1;
let ano = agora.getFullYear();

console.log(`Data legível: hoje são ${dia} do ${mes} de ${ano}.`);

// Há uma forma mais fácil de fazer isso:

let dataPadraoBrasil = agora.toLocaleDateString('pt-BR');
console.log(dataPadraoBrasil);

/**
 * A função formata a data conforme a localização do usuário
 */