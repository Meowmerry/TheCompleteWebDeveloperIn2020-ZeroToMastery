// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.shift([0]); //Banana
console.log(array); //[ 'Apples', 'Oranges', 'Blueberries' ]

// 2. Sort the array in order.
console.log(array.sort()); //[ 'Apples', 'Blueberries', 'Oranges' ]

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array); [ 'Apples', 'Blueberries', 'Oranges', 'Kiwi' ]

// 4. Remove "Blueberries" and "Oranges" from the array.
// array.shift([0]);
array.splice(1,2);
console.log(array); //[ 'Apples', 'Kiwi' ]

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.unshift("Blueberries", "Oranges");
console.log(array); //[ 'Blueberries', 'Oranges', 'Apples', 'Kiwi' ]
array.sort();
array.reverse(); 
console.log(array); //[ 'Oranges', 'Kiwi', 'Blueberries', 'Apples' ]

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]); // "Oranges"