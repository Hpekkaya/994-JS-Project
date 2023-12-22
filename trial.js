let minNumber = 50, maxNumber=60;
console.log("This function generates number between (",minNumber,"-",maxNumber, ")" )
let num =Math.random()*maxNumber ;
while ( num < minNumber  ) {
    num =Math.random()*maxNumber ;
}

console.log("The random number => ", num.toFixed(), "\n");
console.log("________________________________ \n");