// ESERCIZIO

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)


// chiedo 5 volte all'utente un numero
let somma = 0;
for ( let i = 0; i < 5; i++ ) {
    const userNumber = parseInt(prompt('Dammi un numero'));
    console.log(userNumber);
    
    // faccio la somma di tutti i numeri che mi ha dato l'user
    somma += userNumber;
    console.log(somma);
}

// Stampo il risultato
alert('Somma totale: ' + somma)