/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte ? Se dobbiamo confrontare qualcosa che "cosa" ci serve ?


Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare ? torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
analizzate la traccia, per capire queli strumenti vi occorrono per risolvere il problema
Bonus: (FATELO!)
Usa bottone per generare il numero e poi mostriamo i risultati in pagina. */


//per iniziare il gioco clicca sul bottone
//genera un numero da 1 a 6 per l'utente
//genera un numero da 1 a 6 per il pc 
//confronta e verifica il numero più grande

//prendo elementi della DOM
const buttonClick = document.getElementById('btn')
const answer = document.querySelector('#risposta')





//click del bottone
buttonClick.addEventListener('click', function () {
    console.log('inizia il gioco')
    //genera un numero per l'user
    let userNumber = Math.round(Math.random() * 5) + 1;
    //genera un numero per il pc
    let pcNumber = Math.round(Math.random() * 5) + 1;
    //stampo
    console.log(userNumber, pcNumber)
    //genera un numero per l'user
    if (userNumber > pcNumber) {
        const userwin = `<p> L'user ha vinto con un punteggio di ${userNumber} invece di ${pcNumber}</p>`
        answer.innerHTML = userwin
    } else if (userNumber == pcNumber) {
        const draw = `<p> L'user e il pc hanno pareggiato con un punteggio di  ${userNumber} || ${pcNumber}</p>`
        answer.innerHTML = draw
    } else {
        const pcwin = `<p> Il pc ha vinto con un punteggio di ${pcNumber} invece di ${userNumber}</p>`
        answer.innerHTML = pcwin
    }

})