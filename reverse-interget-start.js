/**
 * Dato un numero intero restituire il numero inverso
 * Esempio
 * reverseInt(15) => 51
 * reverseInt(981) => 189
 * reverseInt(-90) => -9
 * reverseInt(-15) => -51
 */

/**
 * Dato un numero ritorna il numero invertito mantenendo il segno
 * @param {Integer} num numero da invertire
 * @returns numero invertito
 */
function reverseInt(num) {
  const numToArray = num.toString().split("").reverse();

  if (num < 0) {
    numToArray.pop();
    return Number(-numToArray.join(""));
  }

  return Number(numToArray.join(""));
}

reverseInt(-90);
