// Recomenda-se nomear o arquivo com o nome da classe que iremos construir

class Celular {
    /**
     * Classes usualmente possuem um método construtor, que é um método padrão
     * para inicializar os atributos da classe.
     * 
     * No caso abaixo, a inicialização é automática, ou seja, não precisa passar
     * parâmetros quando instanciar o objeto.
     * Mas existirão situações em que passaremos os valores dos atributos na
     * hora de instanciar a classe.
     */

    constructor(){
        this.cor = "branco";
        this.memoria = 520;
        this.processador = "dual core";
        this.ram = 4;
    }

    ligar() {
        console.log("ligando o celular...");
        return "celular ligado";
    }
}


let objeto = new Celular();
console.log(objeto);

console.log(objeto.ligar());