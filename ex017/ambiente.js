// Imprimindo cada elemento no console.

let num = [5, 7, 4, 8, 6]


for(let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Enquanto "pos" for menor do que o tamanho do vetor "num", o pos vai receber ++ 

// Simplificando

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// para cada posição na variável composta (num) eu vou mostrar o num[pos]

