export default function PlayerPlayed(playerPick) {
  switch (Number(playerPick)) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
    default:
      return;
  }
}
