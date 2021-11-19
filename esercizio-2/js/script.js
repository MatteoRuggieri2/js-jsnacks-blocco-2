// ESERCIZIO

// Generatore di “nomi cognomi” casuali: prendendo
// una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

const nomi = ['matteo', 'daniele', 'gianni', 'piero', 'fabrizio'];
const cognomi = ['rossi', 'verdi', 'bianchi', 'fabrizi', 'de rola'];
const newNameArray = [];

for (let i = 0; i < nomi.length; i++) {

    const numberName = Math.floor((Math.random() * ((nomi.length - 1) + 1)) + 0);
    const numberSurname = Math.floor((Math.random() * ((nomi.length - 1) + 1)) + 0);
    
    alert(nomi[numberName] + ' ' + cognomi[numberSurname]);

    const newName = nomi[numberName] + ' ' + cognomi[numberSurname];

    newNameArray.push(newName);

}

console.log(newNameArray);