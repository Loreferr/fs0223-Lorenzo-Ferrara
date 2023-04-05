/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
  let num1 = 6;
  let num2 = 9;
  if(num1>num2){
      console.log(num1);  
    }else{
      console.log(num2);
    }
  }
  
  
  /* ESERCIZIO 2
    Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  */
  {
    let num1 = 6;
  if(num1 != 5){
    console.log( 'not equal')
  }
  }
  
  /* ESERCIZIO 3
    Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 /ento: cerca l'operatore modulo su un motore di ricerca)
  */
  
  {
  
  let num3 = 25
  if(num3 % 5 == 0){
    console.log('divisibile per 5')
  }
  }
  /* ESERCIZIO 4
    Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  */
  {
  let num4 = 8;
  let num5 = 32;
  
  if(num4 == 8 || num5 == 8  ) {
    console.log('Il valore di uno dei 2 numeri è 8');
  }else if(num4 + num5 == 8 || num4 - num5 == 8){
    console.log('addizione/sottrazione uguale a 8')
  }
  }
  
  
  
  /* ESERCIZIO 5
    Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
    C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
    Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  */
  {
  let totalShoppingCart = 49;
  if(totalShoppingCart > 50){
    console.log(`Il totale della spesa è ${totalShoppingCart}`);
  }else{
    totalShoppingCart += 10;
    console.log(`Il totale della spesa è ${totalShoppingCart}`);
  }
  }
  
  /* ESERCIZIO 6
    Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
    Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  */
  
  let totalShoppingCart = 69;
  if(totalShoppingCart < 50){
    totalShoppingCart *= 0.80;
    //totalShoppingCart = totalShoppingCart - (totalShoppingCart * 0.20);
    totalShoppingCart += 10;
    console.log(`Il totale della spesa è ${totalShoppingCart}`);
  }else{ 
    totalShoppingCart *= 0.80;
    console.log(`Il totale della spesa è ${totalShoppingCart}`);
  }
  
  // chiedere al professore come fare moltiplicazione con %
  
  
  
  /* ESERCIZIO 7
    Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
    Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
    Alla fine mostra il risultato in console.
  */
  
  let num1 = 3;
  let num2 = 2;
  let num3 = 1;
  let temp;
  
  if(num1 > num2 && num1 > num3){
    if(num2 > num3){
      console.log(num1 + " " + num2 + " " + num3);
    }else{
      console.log(num1 + " " + num3 + " " + num2);
    }
  } else if(num2 > num1 && num2 > num3){
    if(num1 > num3){
      console.log(num2 + " " + num1 + " " + num3);
    }else{
      console.log(num2 + " " + num3 + " " + num1);
    }
  } else if(num3 > num1 && num3 > num2){
    if(num2 > num3){
      console.log(num3 + " " + num2 + " " + num1);
    }else{
      console.log(num3 + " " + num1 + " " + num2);
    }
  } 
  
  
  /* ESERCIZIO 8
    Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */
  
  let num4 = 69
  console.log(typeof num4)
  
  /* ESERCIZIO 9
    Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */
  
  let num12 = 10
  if (num12 % 2 == 0){
    console.log("Il numero è pari")
  } else {
    console.log ("Il numero è dispari")
  }
  
  /* ESERCIZIO 10 
    Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
    let val =   5
    if (val < 5) {
        console.log("Meno di 5");
      } else if (val < 10) {
        console.log("Meno di 10");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
  
  
  
  /* ESERCIZIO 11
    Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  */
  
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me.prop = 'city';
  me.city = 'Toronto'; 
  console.log(me.city);
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  delete me.lastName;
  console.log(me);
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  
  me.skills.pop();
  console.log(me);
  
  /*delete me.skills[1]
  chiedere al prof come togliere quello centrola*/
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  
    arrVuoto = [];
    
    arrVuoto.push(1,2,3,4,5,6,7,8,9,10);
    console.log(arrVuoto);
  
  
  /*{
    arrVuoto = [];
  
    for (let index = 0; index < 10; index++) {
      arrVuoto[index] = index+1;    
    }
  
    console.log(arrVuoto);
  }*/
  
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  arrVuoto[9] = 100;
  console.log(arrVuoto);
  console.log('test')
  