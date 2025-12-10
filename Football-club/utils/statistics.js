import { players } from "../data/players.js";

export function getTotalGoals() {
  return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayersByPosition(position) {
  return players.filter((player) => player.position === position);
}

export function getTotalAssists() {
  return players.reduce((total, player) => total + player.assists, 0);
}

export function getTopScorer() {
  // return players.reduce((max, player) => Math.max(max, player.goals),0)
  const max = players.sort((a, b) => b.goals - a.goals);
  return max[0].goals;
}

export function getAverageAge() {
 const sum =  players.reduce((sum, player) => sum + player.age, 0);
  const total = (sum / players.length).toFixed(1)
  ;
  return total
}

export function getPlayersByNatioality(nationality) {
    const newArr = players.filter((player) => player.nationality === nationality)    
    return newArr
}

