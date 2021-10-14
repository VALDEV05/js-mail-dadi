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

/* 
    STRUMENTI
        -.GETELEMENTBYID
        -ARRAY
        -.ADDEVENTLISTENER
        -FOR LOOP
        -.INNERHTML
*/

// Istruzioni
const emailCheck = document.getElementById('emailCheck')

const checkBtn = document.getElementById('check')

const answer = document.querySelector('#risposta')

const userRegistred =
    [
        'alessandrodelre@gmail.com',
        'alessaimisciagna@gmail.com',
        'andreabellatreccia@gmail.com',
        'andreatosi@gmail.com',
        'chandrarota@gmail.com',
        'chiarapapagni@gmail.com',
        'chiarapassaro@gmail.com',
        'christophertarascio@gmail.com',
        'diegodennuccio@gmail.com',
        'doinaganceriuc@gmail.com',
        'emanuelepica@gmail.com',
        'fabiopacifici@gmail.com',
        'fabiolagardin@gmail.com',
        'federicofrascà@gmail.com',
        'filippomangione@gmail.com',
        'gaetanosciurti@gmail.com',
        'valeriocorda@gmail.com',
        'valeriocordax@gmail.com',
        'gaianacheli@gmail.com',
        'giovannibelda@gmail.com',
        'chiara.chiacca@libero.it'
    ]

checkBtn.addEventListener('click', function () {

    const email = emailCheck.value
    console.log(email);
    //varianbile "trovata"
    let show = false

    for (let i = 0; i < userRegistred.length; i++) {
        const element = userRegistred[i];

        if (email == element) {
            show = true
        }
    }
    /* permesso */
    if (show == true) {
        const allowed = `<div id="allowed" class="block">
        <h1 class="">LA TUA EMAIL ERA REGISTRATA, CI VEDIAMO LUNEDI 18/10 ALLE 19 (ora italiana) SUL NOSTRO SITO.</h1></div>`
        answer.innerHTML = allowed
        /* respinto */
    } else {
        const rejected = `<div id="rejected" class="block">
        <h1 class="">LA TUA EMAIL NON È STATA TROVATA NEI NOSTRI DATABESE, ALL'EVENTO MANCA MOLTO POCO, QUINDI PROVVEDI A REGISTRARE LA TUA EMAIL.</span></h1></div>`

        answer.innerHTML = rejected
    }
    console.log(show);
})