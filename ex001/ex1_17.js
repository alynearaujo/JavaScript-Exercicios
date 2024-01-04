// criando objeto dentro de uma função
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}    
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
console.log(pessoa1.nome)

// objeto
//const pessoa1 = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 25,
//
//    fala() {
//        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
//    }
//};
//
// pessoa1.fala()