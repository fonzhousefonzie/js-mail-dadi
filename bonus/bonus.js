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
Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo 
dell’array.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const element = document.getElementById('element');

//const quantiElementi = prompt(`Quanti elementi deve contenere l'array?`);
const quantiStampati = prompt(`Quanti elementi vuoi stampare, partendo dalla fine?`);

for (let i = (array.length - quantiStampati); i < array.length; i++){
    element.innerHTML+= `<p>${array[i]}</p>`;
}