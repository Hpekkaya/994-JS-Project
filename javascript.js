// Random number generate between (0-1000)

console.log("This function generates number between (0-1000) \n \n")
let num =Math.random()*1001 ;
console.log("The random number => ", num.toFixed());


// Generate new array
console.log("\n Generate new array \n");
let people1 = ["Greg", "Mary", "Devon", "James"];
console.log("First Array (people1) :", people1);
// Assigning people1 to people2
let people2 = people1 
// Elizabeth added in  index nu:1
people2.splice(1, 0, "Elizabeth"); 
// Artie added in place of Devon  index nu:3
people2.splice(3, 1, "Artie"); 
console.log("Generated new array (people2) :", people2);




