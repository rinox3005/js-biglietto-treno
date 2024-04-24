'use strict';

// -- definisco una variabile distance e ne stabilisco il valore tramite prompt

const distance = Number(prompt('Enter the distance you want to travel in kilometers (km):'));

console.log('Travel distance: ', distance, 'km');

// -- definisco una variabile age e ne stabilisco il valore tramite prompt

const age = Number(prompt('How old are you?'));

console.log('Age: ', age, 'years old');

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// -- definisco una variabile pricePerKm e le assegno il valore 0.21

const pricePerKm = Number(0.21);

console.log('Current price per Km: ', pricePerKm);

// -- definisco una variabile ticketCost calcolando distance * 0.21

let ticketCost = (distance * pricePerKm);

console.log('Ticket cost: ', ticketCost, '€');



// SE (age < 18) {

// va applicato uno sconto del 20% per i minorenni

// -- assegno un valore di scontistica alla variabile youngDiscount = 20

// -- definisco una variabile discountedYoung per lo sconto minorenni ((ticketCost * youngDiscount) / 100)

// -- definisco una variabile ticketCostYoung calcolando il valore come (ticketCost - discountedYoung)

// ticketCost =  ticketCostYoung



// } ELSE (age > 65){

// va applicato uno sconto del 40% per gli over 65

// -- assegno un valore di scontistica alla variabile oldDiscount = 40

// -- definisco una variabile discountedOld per lo sconto minorenni ((ticketCost * oldDiscount) / 100)

// -- definisco una variabile ticketCostOld calcolando il valore come (ticketCost - discountedOld)

// ticketCost = ticketCostOld

// }


// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// console.log (ticketCost.toFixed(2)) ???