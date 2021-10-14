/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */
/* Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare ? torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
analizzate la traccia, per capire queli strumenti vi occorrono per risolvere il problema
Bonus: (FATELO!)
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */



//chiedo email 
const email = document.getElementById('email_input');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    console.log(email.value)

})


//creo array di email almeno 20


//verifico che quell'email fa parte della lista 

//stampo un messaggio in console