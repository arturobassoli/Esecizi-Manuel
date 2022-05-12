/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/

  /**
   * Data una stinga itona se è palindroma o meno
   * @param {String} word la parola da controllare
   * @returns true se la parola è palindoma false se non lo è
   */
  function isPalindrome (word) {
    let initialWord = word;
    let reverseWord = word.split('').reverse().join('');
    return initialWord === reverseWord
  }

  isPalindrome("anna")