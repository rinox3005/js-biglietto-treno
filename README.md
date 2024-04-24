
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

-- definisco una variabile distance e ne stabilisco il valore tramite prompt

-- definisco una variabile age e ne stabilisco il valore tramite prompt




Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

-- definisco una variabile ticketCost calcolando distance * 0.21



SE (age < 18) {

va applicato uno sconto del 20% per i minorenni

-- assegno un valore di scontistica alla variabile youngDiscount = 20

-- definisco una variabile discountedYoung per lo sconto minorenni ((ticketCost * youngDiscount) / 100)

-- definisco una variabile ticketCostYoung calcolando il valore come (ticketCost - discountedYoung)

ticketCost =  ticketCostYoung



} ELSE (age > 65){

va applicato uno sconto del 40% per gli over 65

-- assegno un valore di scontistica alla variabile oldDiscount = 40

-- definisco una variabile discountedOld per lo sconto minorenni ((ticketCost * oldDiscount) / 100)

-- definisco una variabile ticketCostOld calcolando il valore come (ticketCost - discountedOld)

ticketCost = ticketCostOld

}


L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


console.log (ticketCost.toFixed(2)) ???
