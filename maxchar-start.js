/**
 * Data una stringa, restituisci il carattere che viene ripetuto più volte.
 * Esempio
 * maxChar("abccccccd") => "c"
 * maxChar("apple 12311111") => "1"
 */

/**
 *Ritorna l'occorrenza maggiore della stringa
 * @param {String} word stringa di cui ritornare l'occorrenza maggiore
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

  Object.keys(letterCount).reduce((pv, cv) => {
    if (!pv) {
      return cv;
    } else if (letterCount[pv] < letterCount[cv]) {
      return cv;
    }

    return pv;
  });
}

countChar("abccccccd");
