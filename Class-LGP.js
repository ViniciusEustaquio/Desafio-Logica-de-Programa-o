class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar(){
        if(this.tipo == 'mago'){
            console.log(`o ${this.tipo} atacou usando Magia`)
        } else if (this.tipo == 'guerreiro') {
            console.log(`o ${this.tipo} atacou usando Espada`)
        }
    }
}


let mago = new hero('Determinado', 29, 'mago')

mago.atacar();