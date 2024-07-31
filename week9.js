// class representing  a single card
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit; 
    }
    // method to return a string representation of card
    toString() {
        return `${this.rank} of ${this.suit}`;

    }
}

//class represents a deck of cards
 class Deck {
    constructor() {
        this.cards = [] ; // array hold the cards
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['hearts', 'Diamonds', 'Clubs', 'Spades'];
        //create 52 cards and add them to deck
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(rank, suit));

            }
        }
        this.shuffle(); // to shuffle the deck
 }
 // method to shuffle the deck
 shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j =  Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; //to swap cards
    }
 }

 //Method to deal a card from deck
 deal() {
    return this.cards.pop();
 }
 }
 //class representing player
 class Player {
    constructor(name) {
        this.name = name; // name of the player
        this.hand = []; //array to hold the players hand of cards
        this.score = 0; //players score
    }

    // Method for player to add card
    playCard() {
        return this.hand.shift(); //remove and return first card in hand
    
    }
     //Method to add point to a player's score
     addPoint() {
        this.score += 1;

     }
    }
    // Class representing a game
    class Game {
        constructor() {
this.deck = new Deck(); //create a new deck
this.player1 = new Player("Player 1"); //create player1
this.player2 = new Player("Player 2"); // create player2
this.dealCards(); //deal cards to the player        }
    }

    //method to deal 26 cards to each player
    dealCards() {
        for(let i = 0; i < 26; i++) {
            this.player1.hand.push(this.deck.deal());
            this.player2.hand.push(this.deck.deal());
        }
    }

    //Method to play a round of game
    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();
        console.log(`${this.player1.name} plays ${card1}`);
        console.log(`${this.player2.name} plays ${card2}`);
        
        
    if(this.getCardValue(card1) > this.getCardValue(card2)) {
        this.player1.addPoint();
        console.log(`${this.player1.name} wins the round`);
    }
    else if (this.getCardValue(card1) < this.getCardValue(card2)) {
        this.player2.addPoint();
        console.log(`${this.player2.name} wins the round`);
    }
            else {
                console.log("It's a tie");
            
            }
        }
        // Method to get the value of card
        
    getCardValue(card) {
        const values = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 
            '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A':14};
            return values[card.rank];
    }
    // Method to play the entire game
    playGame() {
        for (let i = 0; i < 26; i++) {
            this.playRound();
        }
        this.declareWinner() ;
     }
     // Method to declare the winner of game
     declareWinner() {
            console.log(`\nFinal Scores:\n${this.player1.name}:
                ${this.player1.score}\n${this.player2.name}: ${this.player2.score}`);
                if (this.player1.score > this.player2.score) {
                    console.log(`${this.player1.name} wins the game!`);
                }
                else if (this.player1.score < this.player2.score) {
                    console.log(`${this.player2.name} wins the game!`);
                } else {
                    console.log("The game is tie!");

                }
        }
    }
    //Run the game
    const game = new Game();
    game.playGame();