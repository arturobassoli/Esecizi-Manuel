/**
 * Data una stringa, restituire una stringa con i caratteri in ordine inverso.
 * Esempio:
 * reverse("ciao") => "oaic"
 */

function reverseString(parola) {
  return parola.split('').reverse().join('')
}

reverseString('ciao')
