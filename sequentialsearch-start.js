/**
 * Scrivere una funzione che ricerchi la prima occorrenza di un determinato
 * numero in una serie di numeri casuali e restituisca un valore booleano
 * true se presente, false altrimenti. Mostrare il risultato in console.
 */

const arrayOfNumber = [];

/**
 * Genera un numero compreso tra un numero minimo e un numero massimo
 * (estremi compresi).
 *
 * @param {Number} min Il numero minimo generabile
 * @param {Number} max Il numero massimo generabile
 * @returns {Number} Numero casuale tra min e max (estremi compresi).
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Popola l'array con dei numeri generati randomicamente.
 */
function populateArray() {
  for (let i = 0; i < 100; i++) {
    arrayOfNumber.push(generateRandomNumber(1, 100));
  }
}

populateArray();

// INIZIA A SCRIVERE DA QUI

/**
 * Dato un numero e un array ricerca se quel numero è presente
 * @param {Integer} numberToFind numero da trovare nell'array
 * @param {Array} listOfNumber array nella quale ricercare il numero
 * @returns true se il numero è stato trovato, altrimenti false
 */
function findNumbe(numberToFind, listOfNumber) {
  let numberFinded = false;

  listOfNumber.forEach(function (num) {
    if (num === numberToFind) {
      numberFinded = true;
    }
  });

  return numberFinded
}

findNumbe(22, arrayOfNumber);
