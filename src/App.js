import "./css/style.css";

function App() {
  return (
    <div className="main-container">
      <div className="small-container">
        <h1 className="heading">Rock Paper Scissors</h1>

        <div className="game-field">
          <div>
            <p>Computer</p>
            <p>ROCK</p>
          </div>
          <div>
            <p>Player</p>
            <p>SCISSORS</p>
          </div>
        </div>

        <p className="results">0 - 0</p>

        <div className="button-field">
          <button>ROCK</button>
          <button>PAPER</button>
          <button>SCISSORS</button>
        </div>
      </div>
    </div>
  );
}

export default App;
