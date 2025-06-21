# blackjack-project

A React application that simulates the beginning of a Blackjack game. It automatically deals two unique cards from a 52-card deck, calculates their total score, and displays a "BLACKJACK!!!" message if the score is 21. This project focuses on React components, props, conditional rendering, and dynamic card generation.

## **Further Study: More Pokemon!**

### **Pokegame Component**

Modify your component hierarchy so that **_App_** renders a component called **_Pokegame_**. **_Pokegame_** should take your list of 8 pokemon and randomly assign them into two hands of 4 cards each. It should then render two **_Pokedex_** components, one for each hand.

Once you’ve got this working, modify your **_Pokegame_** so that it also calculates the total experience for each hand of pokemon. It should pass this total to the **_Pokedex_**.

Next, have the **_Pokegame_** component determine which hand is the “winner,” where the winning hand is the one with the higher total experience. Then modify the **_Pokedex_** component one more time so that it accepts a prop of **_isWinner_**. If the **_Pokedex_** is the winning one, it should display the message “THIS HAND WINS!” at the bottom of the deck.

Now when you load the page, you should see two different hands with a randomly changing winner every time you refresh.

### **Styling**

Add styling to your components — perhaps you can do interesting things when hovering over a Pokecard, or have them smoothly transition into the page, all via CSS?

## **Further Study: Basic Blackjack!**

Blackjack is a popular card game. You don’t know enough about React to build your own blackjack game yet, but you know enough to handle the beginning of the game.

Build a React app that automatically deals you two cards from a 52-card deck. Each card has a score assigned to it: aces will be worth 11; tens, jacks, queens, and kings will be worth 10; every other card will be worth its value (twos will be worth 2, threes will be worth 3, etc.)

Using URLs from the Deck of Cards API (e.g. https://deckofcardsapi.com/static/img/9H.png), show images of the two random cards on the page, along with the total score for those two cards. If the score is 21, show an additional message letting the user know that they have blackjack!

Note that the two cards you display must be different. You also don’t need to worry about any other functionality from the game of blackjack. If you want different cards, you’ll have to refresh the page.

Here’s an image of what the app might look like:

![Screen Shot 2023-05-08 at 4.00.09 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73a12746-3028-4264-b364-b1bae858a7d1/Screen_Shot_2023-05-08_at_4.00.09_PM.png)

Spend some time talking with your partner about the component design for this application, if you decide to give it a shot.
