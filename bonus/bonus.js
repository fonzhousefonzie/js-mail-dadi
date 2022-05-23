/*
Esercizio Bonus: la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi 
array, anche se non conosciamo a priori quanti elementi contiene.

Extra Bonus
Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti 
numeri interi casuali quanti sono gli elementi da inserire.

Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo 
dell’array.
*/

const element = document.getElementById('element');

const quantiElementi = parseInt(prompt(`Quanti elementi deve contenere l'array?`));
const quantiStampati = parseInt(prompt(`Quanti elementi vuoi stampare, partendo dalla fine?`));

const array = [];

for (let x = 1; x <= quantiElementi; x++){
    array.push(x);
}

for (let i = (array.length - quantiStampati); i < array.length; i++){
    element.innerHTML+= `<p>${array[i]}</p>`;
}