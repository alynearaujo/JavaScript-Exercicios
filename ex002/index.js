/* operador && (and) */
let idade = 25;
let possuiCNH = true;

if (idade > 18 && possuiCNH) {
    console.log("Pode dirigir.")
} else {
    console.log("Não pode dirigir.")
}

/* operador || (OU) */
let diaSemana = "segunda";

if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log("É fim de semana.")
} else { 
    console.log("É dia útil.")
}