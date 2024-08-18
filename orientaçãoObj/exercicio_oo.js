function Animal(nome, tipo, raca, idade) {
    this.nome = nome;
    this.tipo = tipo;
    this.raca = raca;
    this.idade = idade;
}

Animal.prototype.emitirSom = function() {
    if (this.tipo === 'cachorro') {
        return 'está latindo...';
    } else if (this.tipo === 'gato') {
        return 'está miando...';
    } else {
        return 'seu som ainda não está cadastrado, mas siga em paz!';
    }
}
Animal.prototype.descreverAnimal = function() {
    return `${this.nome} tem ${this.idade} anos e ${this.emitirSom()}.`;
}

function Papagaio(nome) {
    Animal.call(this, nome, 'pássaro', 'Papagaio', 4);
}

Papagaio.prototype = Object.create(Animal.prototype);
Papagaio.prototype.constructor = Papagaio;


Papagaio.prototype.emitirSom = function() {
    return 'Pru pru!!';
}


function Porco(nome) {
    Animal.call(this, nome, 'Mamífero', 'Porco', 9);
}


Porco.prototype = Object.create(Animal.prototype);
Porco.prototype.constructor = Porco;


Porco.prototype.emitirSom = function() {
    return 'Oinc Oinc!!';
}


const cachorro = new Animal('Scoob', 'cachorro', 'Labrador', 5);
const gato = new Animal('Mel', 'gato', 'Siamês', 3);
const papagaio = new Papagaio('Suprassumo');
const porco = new Porco('Peppa Pig');


console.log(cachorro.descreverAnimal());
console.log(gato.descreverAnimal());
console.log(papagaio.descreverAnimal());
console.log(porco.descreverAnimal());
