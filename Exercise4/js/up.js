'use strict'


// let number = prompt("Son kiriting", '');

let number = prompt('Son kiriting', '')

if (number == 0) {
    alert(`${number} soni neytral son`);
} else if (number > 0){

    number % 2 === 0 ? alert(`${number} soni Juft va musbat son`) : alert(`${number} soni Toq va musbat son`);
} else {
    number % 2 === 0 ? alert(`${number} soni Juft va manfiy son`) : alert(`${number} soni Toq va manfiy son`);
}


// if (number > 0 && number % 2 === 0) {
//     alert('juft son va musbat son')
// }
// else if (number < 0 && number % 2 === 0){
//     alert('Manfiy son va juft son')
// }
// else if (number < 0 && number % 2 === 0) {
//     alert('Manfiy son')
// }
// else if (number = 0){
//     alert('')
// }
// else {
//     alert('toq son')
// }