// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50



//numero casuale

/* function creaNumeriCasuali(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var creatoreNumeriCasuali = creaNumeriCasuali(1, 100);
console.log(creatoreNumeriCasuali); */


//var i=0;

	//while ( i < 16 ) {
    //num = Math.round(Math.random()*100+1);
    //i++; 

  //};


  // Il computer deve generare 16 numeri casuali tra 1 e 100.

  /* var listaNumeri = [];
  
  for (var i= 0; i < 16; i++) {
    num = Math.round(Math.random()*100+1);
    listaNumeri.push(num);
  }
  console.log(listaNumeri); */

  // I numeri non possono essere duplicati


  // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

  /* var i=0;
  do {
    var numeroUtente = Number(prompt("inserisci un numero")); */
    //alert("Hai indovinato");
    /* if (numeroUtente === listaNumeri[i]) {
      alert("failed")
    } else {
      alert("yes...")
    } */
    /* i++;    
  } while (i <= 16); */

  //numeroUtente === listaNumeri[i] || 

  //crea funzione per capire se il numero è nella lista

  /* function cercatoreNellaLista(numero) {
    if (numero != listaNumeri[i]) {
      alert("Bravo Continua");
      numeroUtente
    } else {
      alert("Failed")
    }
  }
  var cercaNellaLista = cercatoreNellaLista(numeroUtente);
  
  console.log(cercatoreNellaLista(numeroUtente)); */

  /* numeroUtente = Number(prompt("inserisci un numero"));
  listaNumeri.push(numeroUtente[i]); */



  
  // Il computer deve generare 16 numeri casuali tra 1 e 100.

  var listaNumeri = [];
 
  var i=0;
  while ( i < 16 ) {
  numeriCasuale = Math.round(Math.random()* 100 + 1);
  listaNumeri.push(numeriCasuale);
  i++;
  };
  console.log(listaNumeri);  

  // I numeri non possono essere duplicati
  
  




  
  
  