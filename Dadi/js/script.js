//Creo una funzione in cui inserisco due variabili che generano dei numeri randomici (che avranno un valore minimo di 1 fin ad un valore massimo di 6) che rappresento il lancio dei dadi
function rollThatDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    //specifico che SE i numeri randomici sono entrambi pari allora il risultato è un pareggio
    if (randomNumber1 === randomNumber2) {
        document.querySelector("result").innerHTML = "DRAW!"
    }
    //Specifico che SE ALTRIMENTI il secondo numero randomico è maggiore del primo allora la cpu vince
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("result").innerHTML = (cpu_dice + "WINS!")
    }
    //Spedcifico ALTRIMENTI si verificasse un altra condizione che non rispecchi le prime due, allora l'utente vince
    else {
        document.querySelector("result").innerHTML = (user_dice + "WINS!")
    }
}