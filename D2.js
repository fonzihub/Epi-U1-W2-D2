/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 20
const n2 = 30
if(n1 > n2) {
  console.log('n1 e il piu grande ')

} else{
  console.log('n2 e il piu grande')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 5
const numero2 = 10
if(numero1 === numero2){
  console.log('5 e uguale a 10')

}else{
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const mela1= 10
if (mela1 % 5 === 0){
  console.log('divisibile per 5')
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const pera1=8
const pera2=0
if(pera1 === 8 || pera1 + pera2 === 8 || pera1 - pera2 === 8){
   console.log("tutti e tre fanno 8")
}
 




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart = 25;
// let shippingCost = 10;
// let total;
// if(totalShoppingCart > 50){
//   total = totalShoppingCart;
//   console.log("totale da pagare:" + '' + 'totalShoppingcart'+"$(spedizione gratuita)")
// }
// else{
//   total = totalShoppingCart + shippingCost;
//   console.log("totale da pagare:"+ " " +(totalShoppingCart + shippingCost) +"$(spedizione esclusa)")
// }


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 25;
let shippingCost = 10;
let blackFriday = 0.2;
let totalScontato = totalShoppingCart - (totalShoppingCart * blackFriday)
let total;
if(totalShoppingCart > 50){
  total = totalScontato ;
  console.log("totale da pagare: " + total +"$(spedizione inclusa)"); 
} else{
  total = totalScontato + shippingCost;
  console.log("totale da pagare: " + total+"$(spedizione esclusa)");
}
 

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
const v1= 5;
const v2=10;
const v3=35;
if( v3 > v2 & v1){
  console.log(v3+" " +v2+" "+v1)
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10;
if (typeof x === 'number'){
  console.log( "x e un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 7;

if (numero % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}
// ESERCIZIO 10
  // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me["lastName"]
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2]
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a =[]
a.unshift(1)
console.log(a)
a.push(2)
console.log(a)
a.push(3,4,5,6,7,8,9,10)
console.log(a)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
a.splice(9,1,100)
console.log(a)
