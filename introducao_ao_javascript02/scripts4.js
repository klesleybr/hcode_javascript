// #1 Programação Orientada a Objetos

/**
 * Uma classe é um conjunto de atributos/variáveis e métodos/funções.
 * O atributo diz o que a classe é e o método diz o que ela faz.
 * 
 * A manifestação de uma classe numa variável é chamada objeto. Dizemos que 
 * o objeto INSTANCIA UMA CLASSE.
 * 
 * var objeto = new Classe();
 */

/**
 * Será importante o this.x
 * O this serve para indicar que estamos referenciando o atributo/método
 * da classe e não um parâmetro externo.
 */


var celular = function() {
    let cor = "prata"; // só com isso, não há atributo.

    this.cor = "prata";
    this.memoria = 520;
    this.processador = "dual core";
    this.ram = 4;

    /**
     * Perceba que há uma diferença entre variável (quando usamos let ou var)
     * e atributo (quando usamos this). Veja o console.
     * 
     * Você não consegue acessar uma variável/função da classe externamente
     * sem o uso do this.
     */

    this.ligar = () => {
        console.log("ligando o celular...");
    };
};

var objeto = new celular();
console.log(objeto);
console.log("cor do celular: " + objeto.cor); // acessa o atributo cor
console.log(objeto.ligar()); // acessa a função ligar

/**
 * Todavia não é adequado criar classes assim, dentro de funções.
 * Abra o arquivo Celular.js para ver uma forma melhor.
 */