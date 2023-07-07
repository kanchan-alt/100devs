//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 



let numbers = [3, 5, 8, 7, 10, 11]
let p = 1;
numbers.forEach((num)=> {
   
    p = num * p;
} )

console.log(p);


// or


function multiNumsInArr(Arr){
    let product = 1
    Arr.forEach(num => product *= num)
//     for (let i = 0; i < Arr.length; i++) {
//         product = Arr[i];
        
//     }
alert(product)
}

multiNumsInArr([10, 2, 3])