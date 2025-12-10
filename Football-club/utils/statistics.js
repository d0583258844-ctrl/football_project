import { players } from "../data/players.js";

export function getTotalGoals() {
  return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayersByPosition(position) {
  return players.filter((player) => player.position === position);
}

export function getTotalAssists() {
    return players.reduce((total, player) => total + player.assists, 0)
}
