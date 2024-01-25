// valores primitivos vs. valores por referência

// a atribuição de numeroB = numeroA cria uma cópia independente, e modificar numeroB não afeta numeroA.

let numeroA = 10;
let numeroB = numeroA;

numeroB = 20;

console.log(numeroA);
console.log(numeroB);


// as variáveis arrayA e arrayB estão apontando para o mesmo objeto na memória. Portanto, alterar o objeto através de uma das variáveis afeta ambas.

let arrayA = [1, 2, 3];
let arrayB = arrayA;

arrayB.push(4);

console.log(arrayA);
console.log(arrayB);


const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João'
console.log(a);
console.log(b);