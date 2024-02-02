/* operador && (and) */
let idade = 25;
let possuiCNH = true;

if (idade > 18 && possuiCNH) {
    console.log("Pode dirigir.")
} else {
    console.log("Não pode dirigir.")
}

/* operador || (OR) */
let diaSemana = "segunda";

if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log("É fim de semana.")
} else { 
    console.log("É dia útil.")
}

/* operador ! (NOT) */
let chovendo = false;

if (!chovendo) {
    console.log("Não precisa de guarda-chuva.")
} else {
    console.log("Leve um guarda-chuva.")
}