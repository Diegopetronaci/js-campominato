 // BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50



  //creo i 3 livelli di difficoltà

  //funzioni raggruppate

  function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function controlloNumero(array, number) {
    var i= 0;
    while ( i < array.length ) {
      if (number === array[i]) {
        return true;
      }
      i++;
    }
  }

  function controlloEccezioni(numeroUser, min, max) {
    if (numeroUser > max) {
      return true;
    } else if (numeroUser < min) {
      return true;
    }
  }

  function fermatore(lunghezzaNumeroUtente, lunghezzaMax ) {
    if (lunghezzaNumeroUtente >= lunghezzaMax) {
      alert("YOU WIN");
    } else {
      alert("BOOM...Game Over...Try Again")
      return "you lose";
    } 
  }
    //funzioni raggruppate

    var livelli = Number(prompt("Seleziona il livello di difficolta da 0 a 2"));

    switch (livelli) {
        case 0:
            var numeriPc = [];

            while(numeriPc.length !==16) {
                var number = getRandomNumber(1, 100);
                if(! controlloNumero(numeriPc, number /* ===false */) ) {    // ! solo quando non sono gia presenti
                numeriPc.push(number);                      // pusha 
                }
            }
            console.log(numeriPc);
            var numeriUtenti = [];
            var possibilità = 100 - 16;

            for (var i = 0; i < possibilità; i++) {
                var numeroUtente = Number(prompt("inserisci un numero tra 1 e 100"));
                if (controlloNumero(numeriPc, numeroUtente)){
                console.log("Boom Game over");
                break;
                }
                while (controlloNumero(numeriUtenti, numeroUtente)) {
                alert("non puoi usare 2 volte lo stesso numero");
                numeroUtente = Number(prompt("inserisci al numero tra 1 e 100"));
                }
                while (controlloEccezioni(numeroUtente, 1, 100)) {
                alert("Non barare...dev ' essere tra 1 e 100");
                numeroUtente = Number(prompt("inserisci al numero tra 1 e 100"));
                }
                numeriUtenti.push(numeroUtente);
            }
            console.log(numeroUtente);
            var fermaCiclo = fermatore(numeriUtenti.length, possibilità) ;

            console.log(fermaCiclo);


            document.getElementById("punteggio").innerHTML = "Il tuo punteggio è di: " + numeriUtenti.length + " punti";
        break;

        case 1:
            var numeriPc = [];

            while(numeriPc.length !==16) {
                var number = getRandomNumber(1, 80);
                if(! controlloNumero(numeriPc, number /* ===false */) ) {    // ! solo quando non sono gia presenti
                numeriPc.push(number);                      // pusha 
                }
            }
            console.log(numeriPc);
            var numeriUtenti = [];
            var possibilità = 80 - 16;

            for (var i = 0; i < possibilità; i++) {
                var numeroUtente = Number(prompt("inserisci un numero tra 1 e 80"));
                if (controlloNumero(numeriPc, numeroUtente)){
                console.log("Boom Game over");
                break;
                }
                while (controlloNumero(numeriUtenti, numeroUtente)) {
                alert("non puoi usare 2 volte lo stesso numero");
                numeroUtente = Number(prompt("inserisci al numero tra 1 e 80"));
                }
                while (controlloEccezioni(numeroUtente, 1, 80)) {
                alert("Non barare...dev ' essere tra 1 e 80");
                numeroUtente = Number(prompt("inserisci al numero tra 1 e 80"));
                }
                numeriUtenti.push(numeroUtente);
            }
            console.log(numeroUtente);
            var fermaCiclo = fermatore(numeriUtenti.length, possibilità) ;

            console.log(fermaCiclo);


            document.getElementById("punteggio").innerHTML = "Il tuo punteggio è di: " + numeriUtenti.length + " punti";
        break;

        case 2:
            var numeriPc = [];

            while(numeriPc.length !==16) {
                var number = getRandomNumber(1, 50);
                if(! controlloNumero(numeriPc, number /* ===false */) ) {    // ! solo quando non sono gia presenti
                numeriPc.push(number);                      // pusha 
                }
            }
            console.log(numeriPc);
            var numeriUtenti = [];
            var possibilità = 50 - 16;

            for (var i = 0; i < possibilità; i++) {
                var numeroUtente = Number(prompt("inserisci un numero tra 1 e 50"));
                if (controlloNumero(numeriPc, numeroUtente)){
                console.log("Boom Game over");
                break;
                }
                while (controlloNumero(numeriUtenti, numeroUtente)) {
                alert("non puoi usare 2 volte lo stesso numero");
                numeroUtente = Number(prompt("inserisci al numero tra 1 e 0"));
                }
                while (controlloEccezioni(numeroUtente, 1, 50)) {
                alert("Non barare...dev ' essere tra 1 e 50");
                numeroUtente = Number(prompt("inserisci al numero tra 1 e 50"));
                }
                numeriUtenti.push(numeroUtente);
            }
            console.log(numeroUtente);
            var fermaCiclo = fermatore(numeriUtenti.length, possibilità) ;

            console.log(fermaCiclo);


            document.getElementById("punteggio").innerHTML = "Il tuo punteggio è di: " + numeriUtenti.length + " punti";
        break;
            
    
        default:
        break;
    }