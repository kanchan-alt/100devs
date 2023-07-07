// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let food = "pizza"
food = "birayani"
alert(food)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let food2 = "pizza"

//alert(food2[1])
alert(food2.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.


function ThreeNumber(a, b,c){
 return  (a/b)*c

}

console.log(ThreeNumber(2,3,5));


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(a){
    console.log(Math.cbrt(a).toFixed(4));
}

cubeRoot(9);


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerCMonth(month){
    if(month === "may" || month === "june"){
        console.log("YAY");
    }else{
        console.log("Booo");
    }
}

summerCMonth('deceber')


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5(n){
    for (let i = 0; i < n; i++) {
        if(i % 5!== 0){
            console.log(i);
        }
        
    }
}