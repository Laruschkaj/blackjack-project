// src/App.js

/**
 * App Component: The main entry point for the React Blackjack application.
 * It primarily renders the BlackjackGame component.
 */
function App() {
    return (
        <div className="App">
            {/* Main title for the application */}
            <h1 className="App-title">Simple React Blackjack</h1>
            {/* Render the BlackjackGame component, which handles the game logic and display */}
            <BlackjackGame />
        </div>
    );
}

// Render the App component into the root div in index.html
// This is the starting point for rendering your entire React application
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('root'));
});