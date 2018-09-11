/*
 * Create a list that holds all of your cards
 */
var cards = ['fa-diamond', 'fa-diamond',
'fa-paper-plane-o', 'fa-paper-plane-o',
'fa-anchor','fa-anchor',
'fa-bolt', 'fa-bolt',
'fa-cube','fa-cube',
'fa-leaf','fa-leaf',
'fa-bicycle','fa-bicycle',
'fa-bomb','fa-bomb'
];

function generateCard(card){
  return  `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`; 
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function initGame(){
  var deck = document.querySelector('.deck');
  shuffle(cards);
  var cardHTML = cards.map(function(card){
    return generateCard(card);
  });
  deck.innerHTML = cardHTML.join('');
  
  //write setinterval function to update text within timer
}
initGame();
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

var allCards = document.querySelectorAll('.card'); //select all cards with class card, retuns an array of cards
let openCards = []; //creates an open cards array
let counter = 0;

allCards.forEach(function(card){ //for each of the objects in the array write a function
  card.addEventListener('click', function(event) { // use event listener to listen for clicks on each card object
    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match') ) {
      openCards.push(card); //stores opens cards in array
        card.classList.add('open','show') //opens the card
        console.log(openCards.length);
        ++counter;
        moves = document.querySelector('.moves');
        moves.innerHTML = counter;
        if (openCards.length == 2){ //hide card if only two cards
          if (openCards[0].dataset.card == openCards[1].dataset.card){
            openCards[0].classList.add('match','open','show');
            openCards[1].classList.add('match','open','show');
            openCards = [];
            
          }else{
          // if no match hide
          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open','show'); //flips the card
            });
            openCards = [];
          }, 1000);}
      }
      

    }
  });
});
