// ESERCIZIO

// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// a somma degli elementi è minore di 50.

let userNumbers = [];
let somma = 0;

while ( somma < 50 ) {
    const userSingleNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userSingleNumber);

    if (!isNaN(userSingleNumber)){

        userNumbers.push(userSingleNumber);
        console.log(userNumbers);
        
        somma += userSingleNumber
        console.log(somma);
        
    }

    
}

console.log('Il risultato è: ' + somma)