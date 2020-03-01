var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

var todosLenght = todos.length;
for (var i = 0; i < todosLenght; i++) {
  console.log(todos[i]);
  // console.log(todos[i] + " !");
  // todos[i] = todos[i] + " !";
  // todos.pop();
  // console.log(todos);
};
console.log("-----------------------------")
// forEach is will access each item in array
todos.forEach((todo, i ) => {
  console.log(todo, i)
});

//while loop
// var counterOne = 10;
// while(counterOne > 10 ) {
//   console.log(counterOne);
//   counterOne--;
// }


// //do while loop
// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while(counterTwo > 10);
