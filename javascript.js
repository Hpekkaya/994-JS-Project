// Random number generate between (0-1000)

console.log("This function generates number between (0-1000)  ")
let num =Math.random()*1001 ;
console.log("The random number => ", num.toFixed(), "\n");
console.log("________________________________ \n");

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
console.log("\n");
console.log("________________________________ \n");

let people3; // For Inner Loop
console.log("Names and Surnames is taken from e-mail address ");
console.log("Before Fulfil                      After Fulfil  ");
console.log("------------------------           ---------------- ");
const people4 = [
    "mustafa_selman@gmail.com",
    "mehmet_colak@hotmail.com",
    "yasin_sezerli@yandex.com",
    "Ahmet_cantaner@gmail.com",
    "sammet_tatlak@hotmail.com",
    "nuray_menselik@yandex.com",
];
let length = people4.length;

// Outer Loop
for (let j = 0; j < length; j++) {
    people3 = people4[j];
    
    let UpCsa_0 = people3[0].toUpperCase(); // For the first Name
    let text = UpCsa_0;
    let space_Num1 = 0; // Find the position of _
    let space_Num = -1; // Assign the number that will not enter the loop
    
    // Inner Loop
    for (let i in people3) {
        space_Num1 = Number(i);
        
        if (i == 0) {
            // For the first Name
            continue;
        }
        // Uppercase Surname
        else if (space_Num1 == space_Num) {
            let UpCsa = people3[i].toUpperCase();
            text += UpCsa;
            continue;
        }
        // Assign " " in place of _
        else if (people3[i] == "_") {
            let space_0 = " ";
            text += space_0;
            space_Num = Number(i) + 1;
            continue;
        }
        // Break when comes to @
        else if (people3[i] == "@") {
            break;
        }
        // Conconate the letters after exceptionals
        else text += people3[i];
    }
    console.log(people3, " ------> ",text);
}

console.log("\n");
console.log("________________________________ \n");




// Finding Second Maximum and Minimum Numbers
const number_Arr = [12, 34, 2, 3, 67, 66, 5, 24];

// Function find Second Maximum Number
function maxSecond(numbers) {
    numbers.sort(function (a, b) {
        return b - a;
    });
    return numbers[1];
}
let secondMax = maxSecond(number_Arr);
console.log("Array Sorted Descending", number_Arr);
console.log("Second Maximum Number :",secondMax, "\n");


// Function find Second Minimum Number
function minSecond(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[1];
}

let secondMin = minSecond(number_Arr);


console.log("Array Sorted Ascending", number_Arr);
console.log("Second Minimum Number :",secondMin, "\n");