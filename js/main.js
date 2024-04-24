'use strict';

// -- definisco le variabili per gli elementi con id in pagina HTML

const traveldistanceOut = document.getElementById('traveldistance');
const ageOut = document.getElementById('age');
const pricekmOut = document.getElementById('pricekm');
const ticketpriceOut = document.getElementById('ticketprice');

// -- definisco una variabile distance e ne stabilisco il valore tramite prompt

const distance = Number(prompt('Enter the distance you want to travel in kilometers (km):'));

console.log('Travel distance: ', distance, 'km');

// -- mostro nel documento lunghezza della tratta scelta

traveldistanceOut.innerHTML = 'Travel distance: ' + distance + ' km';

// -- definisco una variabile age e ne stabilisco il valore tramite prompt

const age = Number(prompt('How old are you?'));

console.log('Age: ', age, 'years old');

// -- mostro nel documento l'etá del passeggero

ageOut.innerHTML = 'Age: ' + age + ' years old';

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// -- definisco una variabile pricePerKm e le assegno il valore 0.21

const pricePerKm = 0.21;

console.log('Current price per Km: ', pricePerKm);

// -- mostro nel documento il costo a Km del biglietto

pricekmOut.innerHTML = 'Current price per Km: ' + pricePerKm;

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

    console.log('Ticket price: ', ticketCost, '€', '- under 18 discount applied');

    // -- mostro nel documento il costo del biglietto con lo sconto applicato

    ticketpriceOut.innerHTML = 'Ticket price: ' + ticketCost + '€ - under 18 discount applied';

    // va applicato uno sconto del 40% per gli over 65

} else if (age > 65) {

    // -- definisco una variabile discountedYoung per lo sconto minorenni

    const discountedOld = (ticketCost * oldDiscount) / 100;

    // -- definisco una variabile ticketCostOld calcolandone il valore

    const ticketCostOld = (ticketCost - discountedOld);

    // -- assegno alla variabile ticketCost il nuovo valore con lo sconto under 18 applicato

    ticketCost = Math.round(ticketCostOld * 100) / 100;

    // -- mostro in console il valore con lo sconto over 65 applicato

    console.log('Ticket price: ', ticketCost, '€', '- over 65 discount applied');

    // -- mostro nel documento il costo del biglietto con lo sconto applicato

    ticketpriceOut.innerHTML = 'Ticket price: ' + ticketCost + '€ - over 65 discount applied';

} else {

    // -- se nessuna delle condizioni precedenti si é verificata calcolo il semplice costo del biglietto senza sconti

    ticketCost = Math.round(ticketCost * 100) / 100;

    // -- mostro in console il valore senza sconto

    console.log('Ticket price: ', ticketCost, '€');

    // -- mostro nel documento il costo del biglietto senza sconto applicato

    ticketpriceOut.innerHTML = 'Ticket price: ' + ticketCost + '€';
}


