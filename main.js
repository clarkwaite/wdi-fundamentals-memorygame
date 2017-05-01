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
}];

var cardsInPlay = [];

var checkForMatch = function () {
			// this.setAttribute("src", cards[cardId].cardImage);
			if (cardsInPlay.length === 2 && cardsInPlay[0].getAttribute('rank') === cardsInPlay[1].getAttribute('rank')) {
			alert("You found a match!");		
			} else if (cardsInPlay.length < 2) {

			}
			else  {
			alert("Sorry. Try again.");
			}
			console.log(cardsInPlay[0]);
	};
var flipCard = function ()	 {
	// var cardId = this.getAttribute('rank');
	// cardsInPlay.push(cardId); 

	// var cardId = this.rank;
	this.setAttribute("src", cards[this.getAttribute('index')].cardImage);
	checkForMatch();

	// 		var checkForMatch = function () {
	// 		this.setAttribute("src", cards[cardId].cardImage);
	// 		if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	// 		alert("You found a match!");		
	// 		} else {
	// 		alert("Sorry. Try again.");
	// 		checkForMatch();
	// 		}
	// }	
};
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');
			cardElement.setAttribute('data-id', 'i');
			cardElement.setAttribute('rank', cards[i].rank);
			cardElement.setAttribute('index', i);


			cardElement.addEventListener('click', flipCard);
			console.log(cardElement.getAttribute('rank'));
			// console.log(cardElement.getAttribute('index'));
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();

