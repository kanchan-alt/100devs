//Create an array of movies with at least three movies.

const movies = ['korea', 'indian', 'thai', 'western']
console.log(movies.length);

//Using the array from above, store the first movie in a variable

const firstMovies = movies[0];

//Get the length of the original array and store it in a new variable

  movies.length

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

const lastMovies = movies[movies.length-1];
movies.pop()