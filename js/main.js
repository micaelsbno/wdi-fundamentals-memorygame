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

var createBoard = function() {
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
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      alert("You found a match");
    } else {  
        alert("Try again!!");
    }
};

var flipCard = function() {

  if (cardsInPlay.length === 0) {
      var cardId = this.getAttribute('data-id');
      cardsInPlay.push(cards[cardId]);
        console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
        console.log(cards[cardId].cardImage);
      this.src = cards[cardId].cardImage;
      cardsInPlay[0].identifier = cardId;
  } else if (cardsInPlay[0].identifier != this.getAttribute('data-id')){
      var cardId = this.getAttribute('data-id');
        cardsInPlay.push(cards[cardId]);
        console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
        console.log(cards[cardId].cardImage);
        this.src = cards[cardId].cardImage;
      cardsInPlay[0].identifier = cardId;
      checkForMatch();
  } else { alert('Choose a new card!')};     
  } 

var refresh = function() {
  location.reload()
};
var restartButton = document.getElementById('restart');
restartButton.addEventListener('click', refresh);

createBoard()