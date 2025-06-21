// src/App.js

function App() {
    // Add a console.log here to see if App component is being called
    console.log("App component is rendering!");

    return (
        <div className="App">
            <h1 className="App-title">Simple React Blackjack</h1>
            <BlackjackGame />
        </div>
    );
}

// TEMPORARILY REMOVE THE document.addEventListener for testing
// We want to see if a more direct ReactDOM.render call works now that CDNs are loading.
ReactDOM.render(<App />, document.getElementById('root'));

// If the above works, we can re-add the DOMContentLoaded if needed for robustness
// but for initial setup, sometimes it creates more confusion.