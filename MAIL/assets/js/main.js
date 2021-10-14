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
const btn = document.getElementById('btn_generate');



//creo array di email almeno 20
//let names = ['elements', 'elements1'.......]

let emailArray = [
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
    'giovannibelda@gmail.com'
]
const find = document.getElementById('find')
btn.addEventListener('click', function () {
    if (email.value == '') {
        const find = document.getElementById('find')
        find.innerHTML = "scrivi un email"
    } else {
        for (let index = 0; index < emailArray.length; index++) {
            const element = emailArray[index];
            if (email.value == element) {
                const find = document.getElementById('find')
                find.innerHTML = "l'email è stata trovata può entrare"
            } else {
                const find = document.getElementById('find')
                find.innerHTML = "email non presente nella lista"
            }

        }
    }


})



//verifico che quell'email fa parte della lista 

//stampo un messaggio in console