// Palidroma Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserisci la parola").toLowerCase();
let alorap = ""; 


function reverseString(){
    return parola.split("").reverse("").join("")
}

alorap = reverseString();


if (parola === alorap){
    console.log(`La parola ${parola} é palindroma`)
} else {
    console.log(`La parola ${parola} non é palindroma`)
}

reverseString(parola)