/**
 * Data una stringa, restituire una stringa con i caratteri in ordine inverso.
 * Esempio:
 * reverse("ciao") => "oaic"
 */

/**
 * ritorna la parola inserita come parametro al contrario
 * @param {string} parola la parola da girare
 * @returns la parola girata
 */
function reverseString(parola) {
  return parola.split('').reverse().join('')
}

reverseString('ciao')
