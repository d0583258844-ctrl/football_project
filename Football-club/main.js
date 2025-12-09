// const players = [
//   {
//     id: 3,
//     name: "Michael Brown",
//     position: "Midfielder",
//     age: 23,
//     goals: 5,
//     assists: 8,
//     matches: 15,
//     nationality: "Brazil",
//   },
//   {
//     id: 5,
//     name: "Robert Wilson",
//     position: "Forward",
//     age: 24,
//     goals: 8,
//     assists: 5,
//     matches: 15,
//     nationality: "Argentina",
//   },
// ];

// const data = {
//   id: 5,
//   name: "Daniel",
//   position: "back",
//   age: 24,
//   goals: 10,
//   assists: 5,
//   matches: 15,
//   nationality: "Argentina",
// };
// export function updatePlayer(id, newData) {
//   for (let i = 0; i < players.length; i++) {
//     if(players[i].id === id) {
//         if(newData.name){ 
//       players[i].name =  newData.name || players[i].name   };
//       players[i].goals = newData.goals || players[i].goals;
//       players[i].position = newData.position || players[i].position;
//       return players[i];
//     } 
//   } return "id not found";
// }

// console.log(updatePlayer(5, data));

// export const findPlayerById = (id) => {
//   for (let i = 0; i < players.length; i++) {
//     if (players[i].id === id) {
//       return players[i];
//     }
//   }return "not found"
// };

// console.log(findPlayerById(5))