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



var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
      checkForMatch() 
  	};
}



var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

var cardsInPlay = [];
checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match");
    } else {  
        alert("Try again!!");
    }
};

var refresh = function() {
	location.reload()
}
var restartButton = document.getElementById('restart');
restartButton.addEventListener('click', refresh);

createBoard()
      

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
      
 
