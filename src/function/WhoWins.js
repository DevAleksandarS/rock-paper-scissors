export default function WhoWins(playerPick, computerPick) {
  if (Number(playerPick) === 1 && computerPick === 3) {
    return "PLAYER_WINS";
  }
  if (Number(playerPick) === 2 && computerPick === 1) {
    return "PLAYER_WINS";
  }
  if (Number(playerPick) === 3 && computerPick === 2) {
    return "PLAYER_WINS";
  }
  if (Number(playerPick) === 3 && computerPick === 1) {
    return "COMPUTER_WINS";
  }
  if (Number(playerPick) === 1 && computerPick === 2) {
    return "COMPUTER_WINS";
  }
  if (Number(playerPick) === 2 && computerPick === 3) {
    return "COMPUTER_WINS";
  }

  return;
}
