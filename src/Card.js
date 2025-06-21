// src/Card.js

// Base URL for the card images from Deck of Cards API
const CARD_IMG_BASE_URL = 'https://deckofcardsapi.com/static/img/';

/**
 * Card Component: Renders a single playing card image.
 * It expects a 'code' prop (e.g., '9H' for 9 of Hearts, 'KS' for King of Spades)
 * to construct the image URL.
 */
function Card(props) {
    // Construct the full image URL for the card
    // Example: https://deckofcardsapi.com/static/img/9H.png
    const imgSrc = `${CARD_IMG_BASE_URL}${props.code}.png`;

    return (
        // Each card is contained within a div for styling
        <div className="Card">
            {/* Display the card image */}
            <img src={imgSrc} alt={props.code} className="Card-image" />
        </div>
    );
}