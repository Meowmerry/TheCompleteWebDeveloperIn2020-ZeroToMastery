// Objects are correction of properties
var user = {
  name: "John",
  age: "34",
  hobby: "Soccer",
  isMarried: false,
  spells : ["abrakadra", "shazam", "boo"],
  shout: function(){ // function if inside the object we called the Method
    console.log("AHHHHHH!!") 
  }
};
user["Speaking skill"] = "Spanish";
user.isMarried = true;
console.log(user.spells[1]);
user.shout();
console.log(user);

// Array 
var list = [
  {
    username: "andy",
    password: "secret"
  },{
    username: "jessy",
    password: "12345"
  }
]
console.log(list[1].password);
console.log(list);