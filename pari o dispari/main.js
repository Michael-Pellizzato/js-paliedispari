// Pari e Dispari 
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

let scelta = prompt("Pari o dispari").toLowerCase();
let numeroComputer = computerRandom()

if (scelta === `pari` || scelta === `dispari`){
    let numero = parseInt(prompt("Inserisci un numero tra 1 e 5"));
    if ((numero >= 1 && numero <= 5)){
        // console.log(scelta, numero, numeroComputer)
        let somma = numero + numeroComputer
        console.log(somma)
        isPariODispari(somma)
    } 
}

function computerRandom(){
    let numeroCpu = Math.floor((Math.random() * 5) + 1);
    return numeroCpu;
}

function isPariODispari(somma){
    if (somma % 2 == 0){
        console.log("La somma é pari")
    } else if (somma % 2 != 0) {
        console.log("La somma é dispari")
    } else {
        console.log("Pareggio")
    }
}
