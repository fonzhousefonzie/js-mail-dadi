const player = [(Math.floor(Math.random() * 5) + 1), (Math.floor(Math.random() * 5) + 1), (Math.floor(Math.random() * 5) + 1)];
const computer = [(Math.floor(Math.random() * 5) + 1), (Math.floor(Math.random() * 5) + 1), (Math.floor(Math.random() * 5) + 1)];

const playerResult = player[0] + ', ' + player[1] + ', ' + player[2];
const computerResult= computer[0] + ', ' + computer[1] + ', ' + computer[2];

if((player[0] + player[1] + player[2]) < (computer[0] + computer[1] + computer[2])){
    alert(`Il computer ha ottenuto ${computerResult}, il giocatore ha ottenuto ${playerResult}: il computer vince.`)
} else {
    alert(`Il computer ha ottenuto ${computerResult}, il giocatore ha ottenuto ${playerResult}: il giocatore vince.`)
}