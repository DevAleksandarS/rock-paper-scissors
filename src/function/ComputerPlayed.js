export default function ComputerPlayed(computerPick) {
  switch (computerPick) {
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
