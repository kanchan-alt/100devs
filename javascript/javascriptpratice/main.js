// *Variables*
// Declare a variable, assign it a value, and alert the value

const ok = "better we talk"
alert(ok)

// Create a variable, divide it by 10, and console log the value
  let number = 100;
  let divByTen = number/10
  console.log(divByTen);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiplyNumber(a, b, c){
    return a*b*c
}

console.log(multiplyNumber(3, 5, 6));

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function addSub(a, b, c, d){
    let adds = a + b;
    let subs = c - d
    console.log(adds);
    console.log(subs);

    return [adds, subs]

}

console.log(addSub(1, 7, 5, 3));
let [x, y] = addSub(1, 7, 5, 3)

//
function sumThreeAndDivide(n1, n2, n3, n4){
    return(n1+n2+n3)/n4
}

sumThreeAndDivide(10, 20, 30, 5)

// create a function that take in 2 number . console log the first number to thepower of the second call the function

function morePower(robot, duck){
    console.log(Math.pow(robot, duck));
}

morePower(2, 3)


// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function addSubDiv(a, b, c){
    let first = a + 100;
    let second = first - b;
    let third = second/c;

    if(third >25){
        console.log ("WE HAVE A WINNNA")
    }
 
}

console.log(addSubDiv(2, 33, 7));

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

// Create a function that takes in a boolean and a string if the boolean is true, alert the string. if the boolean is false, console log the string

function alertLog(b, str){
    // if (b) {
    //     alert(str)
        
    // } else {
    //     console.log(str);
        
    // }

    b ? alert(str) : console.log(str);
}

const alertoRLog = (b, str) =>  b ? alert(str) : console.log(str);





//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3