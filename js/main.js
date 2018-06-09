var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match");
    } else {  
        alert("Try again!!");
    }
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit)
	console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
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
      
 
