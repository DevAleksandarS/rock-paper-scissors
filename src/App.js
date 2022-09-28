import { useState, useReducer, useEffect } from "react";
import "./css/style.css";
import ComputerPlayed from "./function/ComputerPlayed";
import PlayerPlayed from "./function/PlayerPlayed";
import WhoWins from "./function/WhoWins";

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPUTER_PLAYED":
      return {
        computerPlayed: action.payload,
        playerPlayed: state.playerPlayed,
        computerWins: state.computerWins,
        playerWins: state.playerWins,
      };
    case "PLAYER_PLAYED":
      return {
        computerPlayed: state.computerPlayed,
        playerPlayed: action.payload,
        computerWins: state.computerWins,
        playerWins: state.playerWins,
      };
    case "COMPUTER_WINS":
      return {
        computerPlayed: state.computerPlayed,
        playerPlayed: state.playerPlayed,
        computerWins: state.computerWins + 1,
        playerWins: state.playerWins,
      };
    case "PLAYER_WINS":
      return {
        computerPlayed: state.computerPlayed,
        playerPlayed: state.playerPlayed,
        computerWins: state.computerWins,
        playerWins: state.playerWins + 1,
      };
    default:
      return state;
  }
};

function App() {
  const [computerPick, setComputerPick] = useState(0);

  useEffect(() => {
    setComputerPick(Math.floor(Math.random() * 3 + 1));
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    computerPlayed: "",
    playerPlayed: "",
    computerWins: 0,
    playerWins: 0,
  });

  const game = (playerPick) => {
    dispatch({
      type: "COMPUTER_PLAYED",
      payload: ComputerPlayed(computerPick),
    });

    dispatch({
      type: "PLAYER_PLAYED",
      payload: PlayerPlayed(playerPick),
    });

    dispatch({ type: WhoWins(playerPick, computerPick) });
  };

  return (
    <div className="main-container">
      <div className="small-container">
        <h1 className="heading">Rock Paper Scissors</h1>

        <div className="game-field">
          <div>
            <p>Computer</p>
            <p>{state.computerPlayed}</p>
          </div>
          <div>
            <p>Player</p>
            <p>{state.playerPlayed}</p>
          </div>
        </div>

        <p className="results">
          {state.computerWins} - {state.playerWins}
        </p>

        <div className="button-field">
          <button
            value="1"
            onClick={(e) => {
              setComputerPick(Math.floor(Math.random() * 3 + 1));
              game(e.target.value);
            }}
          >
            ROCK
          </button>
          <button
            value="2"
            onClick={(e) => {
              setComputerPick(Math.floor(Math.random() * 3 + 1));
              game(e.target.value);
            }}
          >
            PAPER
          </button>
          <button
            value="3"
            onClick={(e) => {
              setComputerPick(Math.floor(Math.random() * 3 + 1));
              game(e.target.value);
            }}
          >
            SCISSORS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
