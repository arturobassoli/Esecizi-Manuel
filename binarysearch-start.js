/**
 * Scrivere una funzione che ricerchi la prima occorrenza di un determinato
 * numero in una serie di numeri ordinati e restituisca un valore booleano
 * true se presente, false altrimenti. Mostrare il risultato in console.
 *
 * La ricerca deve implementare l'algoritmo di ricerca binaria.
 * Esempio -> https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/01125313/image-2.png
 */

const seriesOfNumber = Array.from(Array(100).keys());

/**
 * Dato un numero e un array di numeri ordinati ritorna se il numero è presente nell'array
 * @param {Integer} numberToFind numero da cercare all'interno dell array
 * @param {Array} listOfNumber lista di numeri ordinati tra cui cercare
 * @returns true se il numero è presente, altrimenti false
 */
function binarySearch(numberToFind, listOfNumber) {
  let firstNumber = 0;
  let lastNumber = listOfNumber.length;

  while (firstNumber <= lastNumber - 1) {
    if (
      listOfNumber[Math.floor((firstNumber + lastNumber - 1) / 2)] ===
      numberToFind
    ) {
      return true;
    } else if (
      listOfNumber[Math.floor((firstNumber + lastNumber - 1) / 2)] <
      numberToFind
    ) {
      firstNumber = Math.floor((firstNumber + lastNumber - 1) / 2) + 1;
    } else {
      lastNumber = Math.floor((firstNumber + lastNumber) / 2);
    }
  }

  return false;
}

binarySearch(100, seriesOfNumber);
