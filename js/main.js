var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match");
    } else {  
        console.log("Try again!!");
    }
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
      checkForMatch() 
  	};
}
      

// pop-cards
// var cards = ["queen", "queen", "king", "king"];
// var cardsInPlay = [];

// var flipCard = function(cardId) {
// 	console.log("User flipped " + cards[cardId])
// 	cardsInPlay.push(cards[cardId]);
//     if (cardsInPlay.length === 2) {
//       if (cardsInPlay[0] === cardsInPlay [1])
//       console.log("You have a match");
//        else 
//         console.log("Try again!!")
//         cardsInPlay.pop()
//         cardsInPlay.pop();
//     } else
//       console.log("Choose a new card");
// }
      
 
