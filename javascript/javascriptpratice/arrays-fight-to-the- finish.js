//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ["what", "how", "why","now"]

movies.forEach(x => <h2>x</h2>)

for (let i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText += movies[i]
    
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const nums = [4, 7, 8]
nums.forEach((x,i) => {
    nums[i] = x + 3

})


//Find the average of all the numbers from question three
const sum = 0
nums.forEach(x => sum = sum + x )

for (let i = 0; i< nums.length; i++) {
  sum += nums[i]
    }