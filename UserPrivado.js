export default class UserPrivado {
    #nome
    #email
    #nascimento
    #role
        constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.ativo = ativo;
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`;
    }
}

/*A sintaxe de atributos privados do JavaScript, como ela funciona? Ela funciona passando 
uma cerquilha(#) antes da declaração do nome da variável que vamos utilizar. Então, 
se quisermos proteger a classe nome, dizer que nome agora é uma classe privada, colocamos 
uma cerquilha antes de nome. Isso é para todas as propriedades que quisermos que sejam privadas.
Só que antes disso, antes do construtor, precisamos declarar essa variável logo na primeira 
linha da classe, então vou declarar #nome. E dentro do construtor repetimos o nome, agora 
com o this, que é onde ele vai ser construído, onde vamos passar dentro do construtor e vai 
ser associado com um dado. Então, declaramos a propriedade que queremos que seja privada fora 
do construtor, chamamos ela no construtor e agora temos que corrigir o exibirInfos, que não 
é mais a propriedade nome, a propriedade é #nome.*/