//Creo una funzione in cui inserisco due variabili che generano dei numeri randomici (che avranno un valore minimo di 1 fin ad un valore massimo di 6) che rappresento il lancio dei dadi
const btn = document.getElementById("rollThatDice")

btn.addEventListener("click", function () {
    let randomNumber1 = ((Math.random() * 6) + 1);
    document.getElementById("user_dice").innerHTML = randomNumber1;

    let randomNumber2 = ((Math.random() * 6) + 1);
    document.getElementById("cpu_dice").innerHTML = randomNumber2;

    if (randomNumber1 === randomNumber2) {
        document.getElementById("result").innerText = "PAREGGIO!";
    }

    else if (randomNumber1 < randomNumber2) {
        document.getElementById("result").innerText = ("CPU VINCE!");
    }

    else {
        document.getElementById("result").innerText = ("D'Antony VINCE!");
    }

})

/*
btn.addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber1 = document.getElementById("user_dice");
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = document.getElementById("cpu_dice");

    //specifico che SE i numeri randomici sono entrambi pari allora il risultato è un pareggio
    if (randomNumber1 === randomNumber2) {
        document.getElementById("result").innerText = "DRAW!";
    }
    //Specifico che SE ALTRIMENTI il secondo numero randomico è maggiore del primo allora la cpu vince
    else if (randomNumber1 < randomNumber2) {
        document.getElementById("result").innerText = (cpu_dice + "WINS!");
    }
    //Spedcifico ALTRIMENTI si verificasse un altra condizione che non rispecchi le prime due, allora l'utente vince
    else {
        document.getElementById("result").innerText = (user_dice + "WINS!");
    }
})
*/