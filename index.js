// Code your solutions in this file
function writeCards(names, event) {
    var cards = []
    for(var i = 0; i < names.length; i++) {
    cards.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
 }
   return cards;
}

function countDown() {
   var countdown = 10;
   while (countdown >= 0) {
       console.log(countdown--);
   }
}
