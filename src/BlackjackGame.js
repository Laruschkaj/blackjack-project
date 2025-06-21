// src/BlackjackGame.js

/**
 * BlackjackGame Component: Manages the game logic for a simple two-card blackjack hand.
 * - Defines a standard 52-card deck with values.
 * - Deals two unique random cards.
 * - Calculates the total score.
 * - Determines if the hand is Blackjack (score of 21).
 * - Renders the dealt cards and the game outcome.
 */
function BlackjackGame() {
    // Define the full 52-card deck with their associated values and image codes.
    // 'code' is used for the image URL (e.g., 'AS' for Ace of Spades)
    // 'value' is the numerical score for Blackjack
    const deck = [
        { code: '2H', value: 2 }, { code: '2D', value: 2 }, { code: '2C', value: 2 }, { code: '2S', value: 2 },
        { code: '3H', value: 3 }, { code: '3D', value: 3 }, { code: '3C', value: 3 }, { code: '3S', value: 3 },
        { code: '4H', value: 4 }, { code: '4D', value: 4 }, { code: '4C', value: 4 }, { code: '4S', value: 4 },
        { code: '5H', value: 5 }, { code: '5D', value: 5 }, { code: '5C', value: 5 }, { code: '5S', value: 5 },
        { code: '6H', value: 6 }, { code: '6D', value: 6 }, { code: '6C', value: 6 }, { code: '6S', value: 6 },
        { code: '7H', value: 7 }, { code: '7D', value: 7 }, { code: '7C', value: 7 }, { code: '7S', value: 7 },
        { code: '8H', value: 8 }, { code: '8D', value: 8 }, { code: '8C', value: 8 }, { code: '8S', value: 8 },
        { code: '9H', value: 9 }, { code: '9D', value: 9 }, { code: '9C', value: 9 }, { code: '9S', value: 9 },
        { code: 'TH', value: 10 }, { code: 'TD', value: 10 }, { code: 'TC', value: 10 }, { code: 'TS', value: 10 }, // Ten (T)
        { code: 'JH', value: 10 }, { code: 'JD', value: 10 }, { code: 'JC', value: 10 }, { code: 'JS', value: 10 }, // Jack
        { code: 'QH', value: 10 }, { code: 'QD', value: 10 }, { code: 'QC', value: 10 }, { code: 'QS', value: 10 }, // Queen
        { code: 'KH', value: 10 }, { code: 'KD', value: 10 }, { code: 'KC', value: 10 }, { code: 'KS', value: 10 }, // King
        { code: 'AH', value: 11 }, { code: 'AD', value: 11 }, { code: 'AC', value: 11 }, { code: 'AS', value: 11 }  // Ace
    ];

    // Deal two unique random cards from the deck
    let card1, card2;
    let randomIndex1, randomIndex2;

    // Loop until two different cards are selected
    do {
        randomIndex1 = Math.floor(Math.random() * deck.length);
        randomIndex2 = Math.floor(Math.random() * deck.length);
    } while (randomIndex1 === randomIndex2); // Ensure the two indices are different

    card1 = deck[randomIndex1];
    card2 = deck[randomIndex2];

    // Calculate the total score
    const totalScore = card1.value + card2.value;

    // Check if the hand is Blackjack
    const isBlackjack = totalScore === 21;

    return (
        <div className="BlackjackGame">
            <h2>Your Hand</h2>
            {/* Container for the two dealt cards */}
            <div className="BlackjackGame-cards">
                {/* Render the first Card component */}
                <Card code={card1.code} />
                {/* Render the second Card component */}
                <Card code={card2.code} />
            </div>

            {/* Display the total score */}
            <p className="BlackjackGame-score">Score: {totalScore}</p>

            {/* Conditionally display the "BLACKJACK!!!" message */}
            {isBlackjack && (
                <div className="BlackjackGame-message">
                    <p>🎉 BLACKJACK!!! 🎉</p>
                </div>
            )}

            {/* A refresh button for fun interactive element */}
            <button className="BlackjackGame-deal-button" onClick={() => window.location.reload()}>
                Deal New Hand
            </button>
        </div>
    );
}