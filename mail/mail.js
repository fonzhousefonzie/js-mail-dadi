const mailList = ['frodo@fellowship.com', 'samwise@fellowship.com', 'merry@fellowship.com', 'pippin@fellowship.com', 'aragorn@fellowship.com', 'boromir@fellowship.com', 'legolas@fellowship.com', 'gimli@fellowship.com', 'gandalf@fellowship.com']

const mailRequest = prompt('Scrivi la tua mail per superare le miniere di Moria');

let mailFound = -1;

for (let i = 0; i < mailList.length; i++){
    if(mailList[i] === mailRequest){
        mailFound = i;
    }
}

if(mailFound === -1){
    alert('YOU SHALL NOT PASS!')
} else {
    alert(`Congratulazioni, puoi continuare il tuo viaggio insieme alla Compagnia dell'Anello.`)
}