//creo la lista delle email tramite un array
const elenco_emails = [
    "iamSatan666@hell.com",
    "pincopallo77@gmail.com",
    "tiziocaio25@tiscali.it",
    "maremmma.maliarda49@live.it",
];

//Inserisco la variabile di controllo, detta flag
const btn = document.getElementById("search");
let found_email = false;

btn.addEventListener("click", function () {

    //Recupero il valor inserito nel campo input
    let word = document.getElementById("e-mail_box").value.toLowerCase();
   
    //Mi assicuro che l'elenco delle e-mails scritte sopra siano associato ad un valore true affinché il bottone search le trovi
    for (let i = 0; i < elenco_emails.length; i++) {
        if (elenco_emails[i].toLowerCase() === word) {
            found_email = true;
        }
    }

    if (found_email === true) {
        document.getElementById("response").innerText = "La tua e_mail è presente nel nostro database"
        //La tua e_mail è presente nel nostro database
    }
    else {
        document.getElementById("response").innerText = "Spiacente, la tua e-mail non è presente nel nostro database"
        //Spiacente, la tua e-mail non è presente nel nostro database
    }
})