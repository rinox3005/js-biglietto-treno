'use strict';

// -- definisco una variabile distance e ne stabilisco il valore tramite prompt

const distance = Number(prompt('Enter the distance you want to travel in kilometers (km):'));

console.log('Travel distance: ', distance, 'km');

// -- definisco una variabile age e ne stabilisco il valore tramite prompt

const age = Number(prompt('How old are you?'));

console.log('Age: ', age, 'years old');

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// -- definisco una variabile pricePerKm e le assegno il valore 0.21

const pricePerKm = 0.21;

console.log('Current price per Km: ', pricePerKm);

// -- definisco una variabile ticketCost calcolando distance * 0.21

let ticketCost = (distance * pricePerKm);

// -- assegno un valore di scontistica alla variabile youngDiscount = 20

const youngDiscount = 20;

// -- assegno un valore di scontistica alla variabile oldDiscount = 40

const oldDiscount = 40;


// va applicato uno sconto del 20% per i minorenni

if (age < 18) {
    // -- definisco una variabile discountedYoung per lo sconto minorenni

    const discountedYoung = (ticketCost * youngDiscount) / 100;

    // -- definisco una variabile ticketCostYoung calcolandone il valore

    const ticketCostYoung = (ticketCost - discountedYoung);

    // -- assegno alla variabile ticketCost il nuovo valore con lo sconto under 18 applicato

    ticketCost = Math.round(ticketCostYoung * 100) / 100;

    // -- mostro in console il valore con lo sconto under 18 applicato

    console.log('Ticket cost: ', ticketCost, '€', '- under 18 discount applied');

} else if (age > 65) {

    // -- definisco una variabile discountedYoung per lo sconto minorenni

    const discountedOld = (ticketCost * oldDiscount) / 100;

    // -- definisco una variabile ticketCostOld calcolandone il valore

    const ticketCostOld = (ticketCost - discountedOld);

    // -- assegno alla variabile ticketCost il nuovo valore con lo sconto under 18 applicato

    ticketCost = Math.round(ticketCostOld * 100) / 100;

    // -- mostro in console il valore con lo sconto over 65 applicato

    console.log('Ticket cost: ', ticketCost, '€', '- over 65 discount applied');

} else {
    ticketCost = Math.round(ticketCost * 100) / 100;
    console.log('Ticket cost: ', ticketCost, '€');
}


