// Random number generate between (0-1000)

// console.log("This function generates number between (0-1000) \n \n")
// let num =Math.random()*1001 ;
// console.log("The random number => ", num.toFixed());

// // Generate new array
// console.log("\n Generate new array \n");
// let people1 = ["Greg", "Mary", "Devon", "James"];
// console.log("First Array (people1) :", people1);
// // Assigning people1 to people2
// let people2 = people1
// // Elizabeth added in  index nu:1
// people2.splice(1, 0, "Elizabeth");
// // Artie added in place of Devon  index nu:3
// people2.splice(3, 1, "Artie");
// console.log("Generated new array (people2) :", people2);

const people3 = "mustafa_selman@gmail.comt";
const people4 = [
  "mustafa_selman@gmail.com",
  "mehmet_colak@hotmail.com",
  "yasin_sezer@yandex.comcar1",
];
let length = people3[0].length;
// console.log(length);

let UpCsa_0 = people3[0].toUpperCase();
let text = UpCsa_0;
let space_Num1=0;
let space_Num=-1;

// Inner Loop
for (let i in people3) {
    space_Num1=Number(i)    

  if (i == 0) {
    continue;
  }

  else if (space_Num1 == space_Num) {
    let UpCsa = people3[i].toUpperCase();
    text += UpCsa;
    continue;
  }

  else if (people3[i] == "_") {
    let space_0 = " ";
    text += space_0;
    space_Num = Number(i)+1 ;
    continue;
  }

  
  else if (people3[i] == "@") {
    break;
  } 
  else text += people3[i];
}
console.log(text);
