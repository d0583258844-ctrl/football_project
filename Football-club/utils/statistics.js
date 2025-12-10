import { players } from "../data/players.js";

export function getTotalGoals() {
  console.log(players.reduce((total, player) => total + player.goals, 0));
}