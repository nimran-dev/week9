let  expect = chai.expect;
describe("Deck of Cards Length", () => {

    it("should see if the length of the card deck is equal to 52.", function(done) {
        let testDeck = new deckOfCards();
        let cards = testDeck.cardDeck;
        let numberOfCards = cards.length;
        console.log("Here is my cards:", cards);
        console.log("How many cards do I have?", numberOfCards);

        expect(numberOfCards).to.eql(52);
        done();
    });
    
});