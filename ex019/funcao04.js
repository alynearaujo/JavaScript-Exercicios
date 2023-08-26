// A recursividade é uma técnica em programação em que uma função chama a si mesma para resolver um problema.

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * fatorial(numero - 1);
    }
  }
  
  const numeroParaCalcularFatorial = 5;
  const resultadoFatorial = fatorial(numeroParaCalcularFatorial);
  
  console.log(`O fatorial de ${numeroParaCalcularFatorial} é ${resultadoFatorial}`);
  