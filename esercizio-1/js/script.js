// ESERCIZIO

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

// chiedo numero all'utente
const userNumber = parseInt(prompt('Dammi un numero'));
let numberToPrint;

// se è pari lo stampo altrimenti stampo il successivo
if (userNumber % 2 === 0) {
    numberToPrint = userNumber;
    alert(numberToPrint);
} else {
    numberToPrint = userNumber + 1;
    alert (numberToPrint)
}