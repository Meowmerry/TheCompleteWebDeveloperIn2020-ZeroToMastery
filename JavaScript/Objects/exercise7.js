// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
let user = {
  username: "meowmerry",
  password: "123456"
};

// 2. Create an array which contains the object you have made above and name the array "database".
let database = [{
  username: "meowmerry",
  password: "123456"
}];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
  {
    username: "John",
    timeline: "Hello, how are you doing today!! So tired from all that learning"
  },
  {
    username: "Marry",
    timeline: "Javascript is sooo cool!!, let's learn Javascritp right now!!"
  },
  {
    username: "Mandy",
    timeline: " let's go eat with friend and having fun!!"
  }
];

var userNamePrompt = prompt("What's your username?");
var PasswordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username &&
    pass === database[0].password) {
     console.log(newsfeed);
  }else{
    alert("Sorry, wrong username and password!");
  }
}
signIn(userNamePrompt, PasswordPrompt);