/**
 * Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
 * il risultato in console.
 * Esempio
 * isAnagram("cinema", "iceman") => true
 * isAnagram("manuel", "giraffa") => false
 */

/**
 * Controlla se due stringhe sono anagrammi
 * @param {String} firstWord prima parola da confrontare
 * @param {String} secondWord seconda parola da confrontare
 * @returns true or false se le parole sono anagrammi o meno
 */
function isAnagram (firstWord, secondWord) {
  const firstWordSorted = sortWord(firstWord);
  const secondWordSorted = sortWord(secondWord);
  return firstWordSorted === secondWordSorted
}

/**
 * Data una parola ritorna una stringa con le lettere in ordine alfabetico
 * @param {String} word parola di cui bisogna ordinare le lettere
 * @returns parola con le lettere ordinate
 */
function sortWord (word) {
  return word.split('').sort().join('');
}

isAnagram("cinema", "iceman")