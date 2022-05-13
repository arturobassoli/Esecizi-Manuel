/**
 * Scrivere una funzione che conti le ricorrenze dei caratteri all'interno di
 * una parola. La funzione dovrà restituire un'oggetto con chiave la lettera e
 * come valore il conteggio. Mostrare il risultato in console.
 * Esempio
 * countChar("hello") => {h: 1, e: 1, l: 2, o: 1}
 */

/**
 * Calcola le occorrenze di ogni lettera data una stringa
 * @param {String} word parola della quale contare le occorrenze
 * @returns quante occorrenze per ogni lettera
 */
function countChar(word) {
  const wordToArray = word.split("");
  const letterCount = {};

  wordToArray.forEach(function (element) {
    if (letterCount[element]) {
      ++letterCount[element];
    } else {
      letterCount[element] = 1;
    }
  });

  return letterCount;
}

countChar("hello");