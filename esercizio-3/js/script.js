// ESERCIZIO

// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari



// creo array di numeri 
const number = [5, 6, 3, 7, 8,];
console.log(number);

let somma = 0;
// leggo tutto l'array con il ciclo for
for (let i = 0; i < number.length; i++) {
    

    // se è in posizione dispari lo sommo insieme agli altri in posizione dispari altrimenti no
    if (i % 2 !== 0){
        somma += number[i];
        console.log(number[i], 'indice: ', i);
    }

}

console.log('la somma è: ', somma);