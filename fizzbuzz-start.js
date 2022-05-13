/**
 * Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
 * Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
 * dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
 * mostrare "FizzBuzz".
 */

function fizzBuzz(firstNum, secondNum) {
  for (let i = 1; i < 101; i++) {
    if (i % firstNum == 0 && i % secondNum == 0) console.log("FizzBuzz");
    else if (i % firstNum == 0) console.log("Fizz");
    else if (i % secondNum == 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(3, 5)
