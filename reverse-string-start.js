/**
 * Data una stringa, restituire una stringa con i caratteri in ordine inverso.
 * Esempio:
 * reverse("ciao") => "oaic"
 */

/**
 * ritorna la parola inserita come parametro al contrario
 * @param {string} word la parola da girare
 * @returns la parola girata
 */
function reverseString(word) {
  return word.split('').reverse().join('');
}

reverseString('ciao')
