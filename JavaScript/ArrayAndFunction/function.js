// function declaration
function sayHello() {
  console.log("Hello function declaration")
}
sayHello();

//function expresstion or we can call Anonymous function
const sayBye = function () {
  console.log("Bye!! function expresstion")
}
sayBye();

//function expresstion 
const sing = function (song) {
  console.log(song);
}
sing("Laaa deee daaaa");
sing("Hellooooo");
sing("Backstreets back alright");

//Arrow function
let multiply = (a, b) => {
  if (a > 10 || b > 10) {
    return " that's too hard";
  } else {
    return a * b;
  }
}
console.log(`The sum : ` + multiply(5, 50));

// parameters is the one we pass in the function
// arguments is function will call by arguments