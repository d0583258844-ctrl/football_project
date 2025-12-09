import { players } from "../data/players.js";

export function getAllPlayers() {
  return players;
}

export const findPlayerById = (id) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === id) {
      return players[i];
    }
  }
  return "not found";
};

export function addPlayer(players, playerData) {
  const new_player = {
    id: players.length + 1,
    name: playerData.name,
    position: playerData.position,
    age: playerData.age,
    goals: playerData.goals || 0,
    assists: playerData.assists || 0,
    matches: playerData.matches || 0,
    nationality: playerData.nationality,
  };
  players.push(new_player);
  return new_player;
}

export function removePlayer(id) {
  for (const player of players) {
    if (player.id === id) {
      players.splice(players.indexOf(player), 1);
      return player;
    } else return "not found";
  }
}

export function updatePlayer(id, newData) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === id) {
      players[i].id = newData.id || players[i].id;
      players[i].name = newData.name || players[i].name;
      players[i].position = newData.position || players[i].position;
      players[i].age = newData.age || players[i].age;
      players[i].goals = newData.goals || players[i].goals;
      players[i].assists = newData.assists || players[i].assists;
      players[i].matches = newData.matches || players[i].matches;
      players[i].nationality = newData.nationality || players[i].nationality;
      return players[i];
    } else {
      return `player by id: ${id} not found`;
    }
  }
}
