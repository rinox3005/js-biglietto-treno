'use strict';

// -- definisco le variabili per gli elementi con id in pagina HTML

const userchoice = document.getElementById('userchoice');
const usernumber = document.getElementById('usernumber');
const computernumber = document.getElementById('computernumber');
const result = document.getElementById('result');
const outcome = document.getElementById('outcome');

// chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispari //SceltaUtentePariDispari

const userEvenOddChoice = prompt('Do you choose even or odd?');

// mostro in console e nel documento il contenuto di userChoice

console.log('The user choice for even and odd is: ', userEvenOddChoice);

userchoice.innerHTML = 'The user choice for even and odd is: ' + userEvenOddChoice;

// definisco una variabile con un valore di prompt 1-9 - numerico numero dell'utente (1/9) /numeroUtente

const userNumberChoice = Number(prompt('Choose a number between 1 and 9'));

// mostro in console e nel documento il contenuto di userChoice

console.log('The user number of choice is: ', userNumberChoice);

usernumber.innerHTML = 'The user number of choice is: ' + userNumberChoice;

// definisco una variabile con un valore randomico tra 1 e 9 (valore del computer) /numeroComputer

const computerNumberChoice = Math.floor((Math.random() * 9) + 1);

// mostro in console e nel documento il contenuto di computerNumberChoice

console.log('The computer number of choice is: ', computerNumberChoice);

computernumber.innerHTML = 'The computer number of choice is: ' + computerNumberChoice;

// definisco una variabile con la somma di numeroUtente + numeroComputer = totaleNumero

const finalResult = userNumberChoice + computerNumberChoice;

// mostro in console e nel documento il contenuto di finalResult

console.log('The result is: ', finalResult);

result.innerHTML = 'The result is: ' + finalResult;

// definisco una variabile che ci dice se il valore totaleNumero è pari o dispari //risultatoPariDispari

const finalScore = (finalResult % 2);


// -SE (risultatoPariDispari === 0 (pari) && SceltaUtentePariDispari === 'pari'){ vince utente ELSE SE (risultatoPariDispari !== 0 (dispari) && SceltaUtentePariDispari === 'dispari') vince utente ELSE vince computer

if (finalScore === 0 && userEvenOddChoice === 'even') {

    console.log('Outcome: User Wins');

    outcome.innerHTML = 'User Wins';

} else if (finalScore !== 0 && userEvenOddChoice === 'odd') {

    console.log('Outcome: User Wins');

    outcome.innerHTML = 'User Wins';

} else {

    console.log('Outcome: Computer Wins');

    outcome.innerHTML = 'Computer Wins';
}